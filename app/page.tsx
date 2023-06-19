import { Listings, FilterList} from './components/stays/Stay';
import Borderblur from '@/app/components/pretty/Borderblur';

export default function Home() {
  return (
    <>
      <div>
        <FilterList />
      </div>
      <div className="pt-8">
        <Listings />
      </div>
      <Borderblur />
    </>
  );
}
