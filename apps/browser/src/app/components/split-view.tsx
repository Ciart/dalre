import styles from './split-view.module.css';

export interface SplitViewProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
}

export const SplitView: React.FC<SplitViewProps> = ({
  children,
  direction = 'row',
}) => {
  return <div className={styles[direction]}>{children}</div>;
};
