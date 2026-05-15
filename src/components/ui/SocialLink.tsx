interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  title: string,
  external?: boolean;
  download?: boolean;
}

export default function SocialLink({
  href,
  icon,
  label,
  title,
  external = false,
  download = false,
}: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      title={title}
      download={download || undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border text-muted-foreground hover:text-accent hover:border-accent hover:bg-accent-subtle transition-colors duration-200"
    >
      {icon}
    </a>
  );
}
