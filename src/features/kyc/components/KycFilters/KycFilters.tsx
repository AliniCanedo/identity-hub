import { SearchInput } from '@/components/ui/SearchInput';

import styles from './KycFilters.module.css';

type Props = {
  search: string;
  status: 'ALL' | 'APPROVED' | 'PENDING' | 'REJECTED';

  onSearchChange: (value: string) => void;
  onStatusChange: (
    value: 'ALL' | 'APPROVED' | 'PENDING' | 'REJECTED',
  ) => void;
};

export function KycFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
}: Props) {
  return (
    <div className={styles.filters}>
      <SearchInput
        value={search}
        placeholder="Buscar..."
        onChange={onSearchChange}
      />

      <select
        value={status}
        onChange={(event) =>
          onStatusChange(
            event.target.value as Props['status'],
          )
        }
      >
        <option value="ALL">Todos</option>

        <option value="APPROVED">
          Aprovados
        </option>

        <option value="PENDING">
          Pendentes
        </option>

        <option value="REJECTED">
          Rejeitados
        </option>
      </select>
    </div>
  );
}