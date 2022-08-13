import styles from './split-view-item.module.css';

export interface SplitViewItemProps {
  children: React.ReactNode;
  isExpanded?: boolean;
}

export const SplitViewItem: React.FC<SplitViewItemProps> = ({
  children,
  isExpanded = false,
}) => {
  return (
    <div className={isExpanded ? styles['expanded'] : undefined}>
      {children}
    </div>
  );
};
