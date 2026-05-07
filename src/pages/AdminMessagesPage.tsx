import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail, MailOpen, Search, RefreshCw, Inbox } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactMessage {
  id: string;
  user_id: string | null;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "unread" | "read";
  created_at: string;
}

const SUBJECTS = [
  { value: "feedback", label: "General Feedback" },
  { value: "bug", label: "Report a Bug" },
  { value: "content", label: "Content Issue" },
  { value: "other", label: "Other" },
];

const subjectLabel = (s: string) => SUBJECTS.find((x) => x.value === s)?.label ?? s;

const AdminMessagesPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("");
  const [active, setActive] = useState<ContactMessage | null>(null);

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        return;
      }
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin");
      if (!roles || roles.length === 0) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }
      setIsAdmin(true);
      await load();
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      toast({ title: "Failed to load messages", description: error.message, variant: "destructive" });
    } else {
      setMessages((data || []) as ContactMessage[]);
    }
    setLoading(false);
  };

  const filtered = useMemo(() => {
    return messages.filter((m) => {
      if (subjectFilter !== "all" && m.subject !== subjectFilter) return false;
      if (statusFilter !== "all" && m.status !== statusFilter) return false;
      if (dateFilter && !m.created_at.startsWith(dateFilter)) return false;
      if (search) {
        const q = search.toLowerCase();
        if (
          !m.email.toLowerCase().includes(q) &&
          !m.name.toLowerCase().includes(q) &&
          !m.message.toLowerCase().includes(q)
        )
          return false;
      }
      return true;
    });
  }, [messages, search, subjectFilter, statusFilter, dateFilter]);

  const unreadCount = messages.filter((m) => m.status === "unread").length;

  const updateStatus = async (id: string, status: "unread" | "read") => {
    const { error } = await supabase
      .from("contact_messages")
      .update({ status })
      .eq("id", id);
    if (error) {
      toast({ title: "Update failed", description: error.message, variant: "destructive" });
      return;
    }
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, status } : m)));
    if (active?.id === id) setActive({ ...active, status });
  };

  const openMessage = async (m: ContactMessage) => {
    setActive(m);
    if (m.status === "unread") {
      await updateStatus(m.id, "read");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center text-muted-foreground">Loading…</div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container py-20">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Access Denied</CardTitle>
              <CardDescription>You don't have admin privileges to view this page.</CardDescription>
            </CardHeader>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-10 space-y-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground flex items-center gap-2">
              <Inbox className="w-7 h-7 text-primary" />
              Contact Messages
            </h1>
            <p className="text-muted-foreground mt-1">
              {messages.length} total · {unreadCount} unread
            </p>
          </div>
          <Button variant="outline" onClick={load}>
            <RefreshCw className="w-4 h-4" /> Refresh
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Filters</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search email, name, message…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={subjectFilter} onValueChange={setSubjectFilter}>
              <SelectTrigger><SelectValue placeholder="Subject" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All subjects</SelectItem>
                {SUBJECTS.map((s) => (
                  <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger><SelectValue placeholder="Status" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All statuses</SelectItem>
                <SelectItem value="unread">Unread</SelectItem>
                <SelectItem value="read">Read</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-24">Status</TableHead>
                  <TableHead>From</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Preview</TableHead>
                  <TableHead className="w-44">Received</TableHead>
                  <TableHead className="w-32 text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-12 text-muted-foreground">
                      No messages match your filters.
                    </TableCell>
                  </TableRow>
                ) : (
                  filtered.map((m) => (
                    <TableRow
                      key={m.id}
                      className={`cursor-pointer ${m.status === "unread" ? "font-medium bg-primary/5" : ""}`}
                      onClick={() => openMessage(m)}
                    >
                      <TableCell>
                        {m.status === "unread" ? (
                          <Badge className="gap-1"><Mail className="w-3 h-3" />Unread</Badge>
                        ) : (
                          <Badge variant="secondary" className="gap-1"><MailOpen className="w-3 h-3" />Read</Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="text-foreground">{m.name}</div>
                        <div className="text-xs text-muted-foreground">{m.email}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{subjectLabel(m.subject)}</Badge>
                      </TableCell>
                      <TableCell className="max-w-md truncate text-muted-foreground">
                        {m.message}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {format(new Date(m.created_at), "MMM d, yyyy HH:mm")}
                      </TableCell>
                      <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => updateStatus(m.id, m.status === "unread" ? "read" : "unread")}
                        >
                          Mark {m.status === "unread" ? "read" : "unread"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl">
          {active && (
            <>
              <DialogHeader>
                <DialogTitle>{subjectLabel(active.subject)}</DialogTitle>
                <DialogDescription>
                  From <span className="text-foreground font-medium">{active.name}</span> &lt;{active.email}&gt; ·{" "}
                  {format(new Date(active.created_at), "PPpp")}
                </DialogDescription>
              </DialogHeader>
              <div className="whitespace-pre-wrap text-foreground border-t pt-4">{active.message}</div>
              <div className="flex justify-end gap-2 pt-4">
                <Button
                  variant="outline"
                  onClick={() => updateStatus(active.id, active.status === "unread" ? "read" : "unread")}
                >
                  Mark as {active.status === "unread" ? "read" : "unread"}
                </Button>
                <Button asChild>
                  <a href={`mailto:${active.email}?subject=Re: ${subjectLabel(active.subject)}`}>Reply via email</a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default AdminMessagesPage;
