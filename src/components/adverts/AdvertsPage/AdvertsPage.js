import React from 'react';
import FiltersForm from './FiltersForm';
import AdvertsList from './AdvertsList';
import EmptyList from './EmptyList';
import storage from '../../../utils/storage';
import { defaultFilters, filterAdverts } from './filters';
import { loadAdverts } from '../../../store/actions';
import { getAdverts } from '../../../store/selectors';
import useStoreData from '../../../hooks/useStoreData';
import useStoreAction from '../../../hooks/useStoreAction';
import './Adverts.css';

const getFilters = () => storage.get('filters') || defaultFilters;
const saveFilters = filters => storage.set('filters', filters);

function AdvertsPage() {
  const adverts = useStoreData(getAdverts);
  const loadAdvertsAction = useStoreAction(loadAdverts);
  const [filters, setFilters] = React.useState(getFilters);

  React.useEffect(() => {
    loadAdvertsAction();
  }, [loadAdvertsAction]);

  React.useEffect(() => {
    saveFilters(filters);
  }, [filters]);

  const filteredAdverts = filterAdverts(adverts, filters);

  return (
    <div className="adverts">
      {adverts.length > 0 && (
        <aside>
          <FiltersForm
            initialFilters={filters}
            defaultFilters={defaultFilters}
            prices={adverts.map(({ price }) => price)}
            onFilter={setFilters}
          />
        </aside>
      )}
      {filteredAdverts.length ? (
        <AdvertsList adverts={filteredAdverts} />
      ) : (
        <EmptyList advertsCount={adverts.length} />
      )}
    </div>
  );
}

export default AdvertsPage;
