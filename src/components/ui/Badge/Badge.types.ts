export type BadgeVariant =
  | 'success'
  | 'warning'
  | 'danger';

export interface BadgeProps {
  children: React.ReactNode;
  variant: BadgeVariant;
}