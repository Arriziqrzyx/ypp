import { useNavigate } from 'react-router-dom';
import { Container } from '../ui/Container';
import { ProductCategoriesSection } from './products/ProductCategoriesSection';
import { productCategories } from '../../data/productsData';

export function ProductsSection() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    // Navigate to the Products page and pass the selected category ID in the state
    navigate('/products', { state: { activeCategoryId: categoryId } });
    
    // Ensure we scroll to top or specific section upon navigation
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <section className="py-24 bg-white relative border-y border-light-gray">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#DCDCDC 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5 }} />
      
      <Container className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* We reuse the ProductCategoriesSection which already has its own Header and Animations */}
          <ProductCategoriesSection 
            categories={productCategories}
            activeCategoryId={null} // None active by default on the home page
            onSelectCategory={handleCategoryClick}
          />
        </div>
      </Container>
    </section>
  );
}
