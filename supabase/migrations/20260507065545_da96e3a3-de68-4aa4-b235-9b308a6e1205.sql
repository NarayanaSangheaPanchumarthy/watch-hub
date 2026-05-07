ALTER TABLE public.contact_messages
ADD COLUMN status TEXT NOT NULL DEFAULT 'unread';

ALTER TABLE public.contact_messages
ADD CONSTRAINT contact_messages_status_check
CHECK (status IN ('unread', 'read'));

CREATE INDEX idx_contact_messages_status ON public.contact_messages(status);
CREATE INDEX idx_contact_messages_subject ON public.contact_messages(subject);