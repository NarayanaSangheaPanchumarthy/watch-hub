import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Shield, ShieldCheck, ShieldX, UserCheck, UserX, RefreshCw, Crown, TrendingUp, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart, Pie, Cell, AreaChart, Area, ResponsiveContainer } from "recharts";

interface AdminUser {
  id: string;
  email: string;
  created_at: string;
  last_sign_in_at: string | null;
  email_confirmed_at: string | null;
  display_name: string | null;
  avatar_url: string | null;
  is_approved: boolean;
  roles: string[];
}

const CHART_COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--destructive))",
  "hsl(var(--accent))",
  "hsl(var(--muted))",
];

const signupChartConfig = {
  signups: { label: "Signups", color: "hsl(var(--primary))" },
};

const roleChartConfig = {
  admin: { label: "Admin", color: "hsl(var(--primary))" },
  moderator: { label: "Moderator", color: "hsl(var(--accent))" },
  user: { label: "User", color: "hsl(var(--muted-foreground))" },
  none: { label: "No Role", color: "hsl(var(--muted))" },
};

const statusChartConfig = {
  approved: { label: "Approved", color: "hsl(var(--primary))" },
  pending: { label: "Pending", color: "hsl(var(--destructive))" },
};

const AnalyticsSection = ({ users }: { users: AdminUser[] }) => {
  const signupData = useMemo(() => {
    const grouped: Record<string, number> = {};
    users.forEach((u) => {
      const date = new Date(u.created_at);
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      grouped[key] = (grouped[key] || 0) + 1;
    });
    return Object.entries(grouped)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([month, signups]) => ({ month, signups }));
  }, [users]);

  const roleData = useMemo(() => {
    const counts: Record<string, number> = { admin: 0, moderator: 0, user: 0, none: 0 };
    users.forEach((u) => {
      if (u.roles.length === 0) counts.none++;
      else u.roles.forEach((r) => { if (counts[r] !== undefined) counts[r]++; });
    });
    return Object.entries(counts)
      .filter(([, v]) => v > 0)
      .map(([name, value]) => ({ name, value }));
  }, [users]);

  const statusData = useMemo(() => [
    { name: "approved", value: users.filter((u) => u.is_approved).length },
    { name: "pending", value: users.filter((u) => !u.is_approved).length },
  ].filter((d) => d.value > 0), [users]);

  if (users.length === 0) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
      {/* Signups Over Time */}
      <Card className="lg:col-span-2">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <CardTitle className="text-base">User Signups Over Time</CardTitle>
          </div>
          <CardDescription>{users.length} total signups</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={signupChartConfig} className="h-[220px] w-full">
            <AreaChart data={signupData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border/30" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} className="fill-muted-foreground" />
              <YAxis allowDecimals={false} tick={{ fontSize: 11 }} className="fill-muted-foreground" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <defs>
                <linearGradient id="signupGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="signups"
                stroke="hsl(var(--primary))"
                fill="url(#signupGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Role & Status Distribution */}
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-primary" />
              <CardTitle className="text-base">Roles</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ChartContainer config={roleChartConfig} className="h-[90px] w-full">
              <BarChart data={roleData} layout="vertical" margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} width={70} className="fill-muted-foreground capitalize" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {roleData.map((entry, i) => (
                    <Cell key={entry.name} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <CardTitle className="text-base">Approval Status</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              {statusData.map((s) => (
                <div key={s.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: statusChartConfig[s.name as keyof typeof statusChartConfig]?.color }}
                  />
                  <span className="text-sm text-muted-foreground capitalize">{s.name}</span>
                  <span className="text-lg font-bold text-foreground">{s.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};


  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    checkAdminAndLoad();
  }, []);

  const checkAdminAndLoad = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/auth");
      return;
    }
    setCurrentUserId(session.user.id);

    const { data: roleData } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin");

    if (!roleData || roleData.length === 0) {
      setIsAdmin(false);
      setLoading(false);
      return;
    }

    setIsAdmin(true);
    await loadUsers();
  };

  const loadUsers = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("admin-users", {
        body: { action: "list_users" },
      });
      if (error) throw error;
      setUsers(data.users || []);
    } catch (err: any) {
      toast({ title: "Error loading users", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleApproval = async (userId: string, approved: boolean) => {
    try {
      const { error } = await supabase.functions.invoke("admin-users", {
        body: { action: "set_approval", user_id: userId, approved },
      });
      if (error) throw error;
      setUsers((prev) =>
        prev.map((u) => (u.id === userId ? { ...u, is_approved: approved } : u))
      );
      toast({ title: approved ? "User approved" : "User denied" });
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    }
  };

  const handleRoleChange = async (userId: string, newRole: string) => {
    try {
      // Remove existing roles first, then assign new one
      const user = users.find((u) => u.id === userId);
      if (user) {
        for (const role of user.roles) {
          await supabase.functions.invoke("admin-users", {
            body: { action: "remove_role", user_id: userId, role },
          });
        }
      }
      if (newRole !== "none") {
        const { error } = await supabase.functions.invoke("admin-users", {
          body: { action: "assign_role", user_id: userId, role: newRole },
        });
        if (error) throw error;
      }
      setUsers((prev) =>
        prev.map((u) =>
          u.id === userId ? { ...u, roles: newRole === "none" ? [] : [newRole] } : u
        )
      );
      toast({ title: "Role updated" });
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container pt-24 pb-16">
          <div className="flex items-center justify-center py-20">
            <RefreshCw className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        </main>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container pt-24 pb-16">
          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center">
              <ShieldX className="w-12 h-12 text-destructive mx-auto mb-2" />
              <CardTitle>Access Denied</CardTitle>
              <CardDescription>You don't have admin privileges to view this page.</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" onClick={() => navigate("/")}>
                Back to Home
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container pt-24 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-3xl font-display font-bold text-foreground">Admin Panel</h1>
              <p className="text-muted-foreground">Manage users, approvals, and roles</p>
            </div>
          </div>
          <Button variant="outline" onClick={loadUsers} className="gap-2">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <UserCheck className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{users.filter((u) => u.is_approved).length}</p>
                  <p className="text-sm text-muted-foreground">Approved</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <UserX className="w-5 h-5 text-destructive" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{users.filter((u) => !u.is_approved).length}</p>
                  <p className="text-sm text-muted-foreground">Pending</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Crown className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{users.filter((u) => u.roles.includes("admin")).length}</p>
                  <p className="text-sm text-muted-foreground">Admins</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Charts */}
        <AnalyticsSection users={users} />

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Users</CardTitle>
            <CardDescription>{users.length} registered users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Last Sign In</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={user.avatar_url || undefined} />
                            <AvatarFallback className="text-xs bg-primary/10 text-primary">
                              {user.email?.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-foreground text-sm">
                              {user.display_name || "No name"}
                            </p>
                            <p className="text-xs text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {user.is_approved ? (
                          <Badge variant="default" className="bg-green-500/10 text-green-500 border-green-500/20">
                            <ShieldCheck className="w-3 h-3 mr-1" />
                            Approved
                          </Badge>
                        ) : (
                          <Badge variant="destructive" className="bg-destructive/10 text-destructive border-destructive/20">
                            <ShieldX className="w-3 h-3 mr-1" />
                            Pending
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <Select
                          value={user.roles[0] || "none"}
                          onValueChange={(val) => handleRoleChange(user.id, val)}
                          disabled={user.id === currentUserId}
                        >
                          <SelectTrigger className="w-[130px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No role</SelectItem>
                            <SelectItem value="user">User</SelectItem>
                            <SelectItem value="moderator">Moderator</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {new Date(user.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {user.last_sign_in_at
                          ? new Date(user.last_sign_in_at).toLocaleDateString()
                          : "Never"}
                      </TableCell>
                      <TableCell>
                        {user.id !== currentUserId && (
                          <Button
                            size="sm"
                            variant={user.is_approved ? "destructive" : "default"}
                            onClick={() => handleApproval(user.id, !user.is_approved)}
                            className="gap-1"
                          >
                            {user.is_approved ? (
                              <>
                                <UserX className="w-3 h-3" />
                                Deny
                              </>
                            ) : (
                              <>
                                <UserCheck className="w-3 h-3" />
                                Approve
                              </>
                            )}
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPage;
