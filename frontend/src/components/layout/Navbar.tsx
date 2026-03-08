import { Link } from 'react-router-dom';
import { ShoppingBag, User } from 'lucide-react';
import { useCart } from '../../store/useCart';

export function Navbar() {
    const cartItemsCount = useCart(state => state.totalItems());

    return (
        <nav className="glass-nav">
            <div className="container flex items-center justify-between" style={{ height: '4rem' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ShoppingBag size={24} color="var(--accent)" />
                    <span style={{ fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.025em' }}>
                        Garments.
                    </span>
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <Link to="/products" style={{ fontWeight: 500 }}>Catalog</Link>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Link to="/cart" style={{ position: 'relative', display: 'flex' }}>
                            <ShoppingBag size={20} />
                            {cartItemsCount > 0 && (
                                <span style={{
                                    position: 'absolute',
                                    top: '-6px',
                                    right: '-8px',
                                    background: 'var(--accent)',
                                    color: 'white',
                                    fontSize: '0.7rem',
                                    fontWeight: 700,
                                    width: '18px',
                                    height: '18px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {cartItemsCount}
                                </span>
                            )}
                        </Link>
                        <Link to="/auth">
                            <User size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
