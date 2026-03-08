-- Seed Data for Garments E-Commerce

-- 1. Create Categories
INSERT INTO categories (id, name) VALUES 
  ('11111111-1111-1111-1111-111111111111', 'Men''s Wear'),
  ('22222222-2222-2222-2222-222222222222', 'Women''s Wear'),
  ('33333333-3333-3333-3333-333333333333', 'Accessories'),
  ('44444444-4444-4444-4444-444444444444', 'Footwear')
ON CONFLICT (id) DO NOTHING;

-- 2. Create Products
INSERT INTO products (name, description, price, stock, category_id) VALUES 
  ('Classic Cotton T-Shirt', 'Premium 100% cotton t-shirt with a relaxed fit. Highly breathable.', 29.99, 150, '11111111-1111-1111-1111-111111111111'),
  ('Slim Fit Denim Jeans', 'Classic indigo wash slim fit jeans with slight stretch for comfort.', 79.99, 80, '11111111-1111-1111-1111-111111111111'),
  ('Silk Floral Blouse', 'Elegant silk blouse with a modern floral print and v-neck design.', 89.50, 40, '22222222-2222-2222-2222-222222222222'),
  ('High-Waisted Trousers', 'Tailored women''s trousers perfect for office wear or formal events.', 65.00, 60, '22222222-2222-2222-2222-222222222222'),
  ('Leather Crossbody Bag', 'Genuine leather minimalist crossbody bag with adjustable strap.', 120.00, 25, '33333333-3333-3333-3333-333333333333'),
  ('Running Sneakers', 'Lightweight performance sneakers with superior cushioning.', 110.00, 100, '44444444-4444-4444-4444-444444444444'),
  ('Knitted Winter Scarf', 'Oversized warm wool blend scarf.', 35.00, 200, '33333333-3333-3333-3333-333333333333'),
  ('Summer Linen Shorts', 'Breathable linen blend shorts tailored for relaxing summer days.', 45.99, 120, '11111111-1111-1111-1111-111111111111');
