
import ItemsList from '../../components/ui/ItemsList';

function ProductsList() {

  return (
    <div className="min-h-screen bg-[#FFF7E2]">
      {/* Summer Collection Section 1 */}
      <div className="mx-auto px-8 py-8">
        <h2 className="flex flex-row max-w-xl justify-center font-['Poppins'] font-medium text-[20px] text-black h-[120px] mb-16">
          Summer Collection
        </h2>
        <ItemsList />
      </div>
      {/* Summer Collection Section 2 */}
      <div className="mx-auto px-8 py-8">
        <h2 className="flex flex-row max-w-xl justify-center font-['Poppins'] font-medium text-[20px] text-black h-[120px] mb-16">
          Summer Collection
        </h2>
        <ItemsList />
      </div>
    </div>
  );
}

export default ProductsList;