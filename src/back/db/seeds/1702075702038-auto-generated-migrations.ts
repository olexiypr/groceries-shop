import { Product } from '../../src/product/entities/product.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class ProductSeed1702075702038 implements MigrationInterface {
  public readonly name = 'ProductSeed1702075702038';

  public readonly products: Product[] = [
    {
      id: 1,
      price: 20,
      discount: 3,
      type: 'vegetables',
      name: 'Vegan Red Tomato',
      description:
        'Fresh, juicy, and ripe, our tomatoes are perfect for salads, sauces, and sandwiches alike.',
      overview:
        'Our tomatoes are hand-picked at peak ripeness, ensuring the best flavor and nutritional value.',
      additionalInfo:
        'Packed with vitamins A and C, as well as potassium and fiber, our tomatoes are a nutritious and delicious addition to any meal.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/organick-f1be5.appspot.com/o/images%2Fproducts-tomato.png?alt=media&token=2bf55738-7ec7-4a4a-9473-627539f2bb9b'
    },
    {
      id: 2,
      price: 15,
      discount: 0,
      type: 'nuts',
      name: 'Organic Almonds',
      description:
        'Our premium almonds are carefully selected and roasted to perfection for a satisfying crunch in every bite.',
      additionalInfo:
        'Our almonds are grown using sustainable farming practices and are free from artificial flavors or preservatives.',
      overview:
        'Our almonds are a great source of protein, fiber, and healthy fats, making them a perfect snack or addition to your favorite recipes.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/organick-f1be5.appspot.com/o/images%2Fproducts-almonds.png?alt=media&token=993c33b1-5bf8-4cad-b2a5-9ed5e4ad68f5'
    },

    {
      id: 3,
      price: 15,
      discount: 3,
      name: 'Cucumber',
      type: 'vegetable',
      description:
        'Fresh and crunchy cucumbers are a staple of any healthy diet.',
      overview:
        'Our cucumbers are carefully selected and grown to ensure maximum freshness and taste.',
      additionalInfo:
        'Cucumbers are a great source of hydration and contain important vitamins and minerals, making them a healthy addition to any meal.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/organick-f1be5.appspot.com/o/images%2Fproducts-cucumber.png?alt=media&token=6dbdf6e6-aa66-4600-8cf0-4744dfd37622'
    },

    {
      id: 4,
      price: 20,
      discount: 6,
      type: 'fresh',
      name: 'Fresh Banana Fruites',
      overview:
        'Our bananas are grown using sustainable farming practices and are free from harmful pesticides and chemicals.',
      description:
        'Our organic bananas are naturally sweet and packed with nutrients. Each bite is a burst of tropical flavor that will leave you craving for more.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/organick-f1be5.appspot.com/o/images%2Fproducts-banana.png?alt=media&token=041be70b-72b5-4f08-94a7-43a579da80c0',
      additionalInfo:
        'Bananas are rich in potassium, fiber, and vitamins B6 and C. They are a great source of energy and can help regulate blood pressure and digestion.'
    },

    {
      id: 5,
      price: 20,
      discount: 9,
      type: 'health',
      name: 'Mung Bean',
      description:
        'Fresh and nutritious mung beans, perfect for adding to your favorite dishes.',
      additionalInfo:
        'Mung beans are a staple in many Asian cuisines, and are often used in soups, salads, and stir-fries.',
      overview:
        'These mung beans are a great source of plant-based protein and fiber, making them a healthy addition to any diet.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/organick-f1be5.appspot.com/o/images%2Fproducts-beans.png?alt=media&token=997564a0-6daa-4dd9-b5c5-a53d892bfc09'
    },

    {
      id: 6,
      price: 17,
      discount: 0,
      name: 'Cabbage',
      type: 'vegetable',
      description: 'Fresh and crispy green cabbage.',
      additionalInfo:
        'Cabbage is a rich source of vitamins C and K, as well as dietary fiber.',
      overview:
        'Our green cabbage is sourced from local farms and carefully selected to ensure freshness and quality.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/organick-f1be5.appspot.com/o/images%2Fproducts-cabbage.png?alt=media&token=dde6c8bc-c9ed-4f01-8e87-ff7854dafffe'
    },

    {
      id: 7,
      price: 20,
      discount: 7,
      type: 'vegetable',
      name: 'Calabrese Broccoli',
      description:
        'Our broccoli is grown in nutrient-rich soil and harvested at the peak of freshness.',
      overview:
        'Our broccoli is a healthy addition to any meal, packed with vitamins and antioxidants to support overall health.',
      additionalInfo:
        'Broccoli is a versatile vegetable that can be enjoyed raw or cooked in a variety of dishes, from stir-fries to salads to roasted side dishes.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/organick-f1be5.appspot.com/o/images%2Fproducts-broccoli.png?alt=media&token=74b8d883-6483-45e6-9c24-bb1009f8a7c4'
    },

    {
      id: 8,
      price: 20,
      discount: 6,
      type: 'vegetable',
      name: 'Cauliflower',
      description:
        'Fresh and crisp, our cauliflower is the perfect addition to your healthy meals.',
      overview:
        'Our cauliflower is locally grown and harvested at the peak of freshness to ensure top-quality taste and texture.',
      additionalInfo:
        'Our cauliflower is rich in antioxidants, fiber, and other essential nutrients that support a healthy diet and lifestyle.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/organick-f1be5.appspot.com/o/images%2Fproducts-cauliflower.jpg?alt=media&token=e970322a-66b1-47de-8cf5-63398c0a3c1e'
    },

    {
      id: 9,
      price: 20,
      discount: 5,
      type: 'fresh',
      name: 'Zelco Suji Elaichi Rusk',
      description:
        'Crunchy, sweet and flavorful tea-time snack made from semolina and cardamom.',
      overview:
        'Perfect accompaniment to your morning or evening tea, offering a delightful crunch and an aromatic flavor of cardamom.',
      additionalInfo:
        'These rusks are baked to perfection to retain their crispiness and come in a hygienic packaging to ensure maximum freshness.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/organick-f1be5.appspot.com/o/images%2Fproducts-zelco-suji.png?alt=media&token=07e41d32-5a73-4549-a820-755525a943db'
    },

    {
      id: 10,
      price: 18,
      discount: 6,
      name: 'Zucchini',
      type: 'vegetable',
      additionalInfo:
        'Zucchini is a great source of vitamins A and C, as well as dietary fiber and potassium.',
      description:
        'Zucchini is a type of summer squash that belongs to the same family as cucumbers and melons.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/organick-f1be5.appspot.com/o/images%2Fproducts-zucchini.png?alt=media&token=6ff7ab4e-ccc9-40a2-ae09-3d97ec5cb1fe',
      overview:
        'With its mild flavor and tender texture, zucchini is a versatile vegetable that can be grilled, sautéed, roasted, or used in baked goods like bread and muffins.'
    },

    {
      id: 11,
      price: 20,
      discount: 5,
      type: 'millets',
      name: 'White Hazelnut',
      additionalInfo:
        'Great source of fiber, protein, and essential nutrients that can help maintain a healthy diet.',
      description:
        'Our millets are versatile and can be used in a variety of dishes such as porridge, salads, soups, and more.',
      overview:
        'Millets are a sustainable and environmentally friendly crop that requires less water and pesticides than traditional grains.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/organick-f1be5.appspot.com/o/images%2Fproducts-white-hazelnut.png?alt=media&token=9807ad1a-c48b-4a8c-8534-1c1ff9dd579e'
    },

    {
      id: 12,
      price: 20,
      discount: 3,
      name: 'Eggs',
      type: 'fresh',
      description:
        'Eggs are a highly nutritious food that is rich in protein, vitamins, and minerals.',
      additionalInfo:
        'They are a versatile ingredient that can be cooked in various ways, including boiled, fried, and scrambled.',
      overview:
        'Eggs are also an essential ingredient in many baking recipes, adding moisture, structure, and flavor to baked goods.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/organick-f1be5.appspot.com/o/images%2Fproduct-eggs.png?alt=media&token=cfa0c3e0-6ad6-474d-9cb4-e6a8b94e14d0'
    },

    {
      id: 13,
      price: 17,
      discount: 0,
      name: 'Onion',
      type: 'vegetable',
      description:
        'Fresh, high-quality onions with a pungent aroma and a distinctive taste',
      overview:
        'A versatile ingredient used in various cuisines for its flavor and nutritional value',
      additionalInfo:
        'Rich in antioxidants, vitamins, and minerals, onions can help boost immunity and promote overall health.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/organick-f1be5.appspot.com/o/images%2Fproducts-onion.png?alt=media&token=cf1b0b46-0ae2-4458-82bf-e49b0c47a401'
    },

    {
      id: 14,
      price: 17,
      discount: 7,
      type: 'nuts',
      name: 'Pistachios',
      additionalInfo:
        'Our pistachios are rich in protein, fiber, and healthy fats.',
      description:
        'Our pistachios are carefully selected for their size, taste, and texture.',
      overview:
        'Our pistachios are sourced from the finest orchards and are packed with nutrients and flavor.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/organick-f1be5.appspot.com/o/images%2Fproducts-pistachios.png?alt=media&token=e0e60a6c-ecde-4fdc-82ff-43f2cfe1b664'
    },

    {
      id: 15,
      price: 20,
      discount: 3,
      type: 'vegetable',
      name: 'Fresh Corn',
      description:
        'Fresh, sweet and juicy, corn is a staple of many cuisines around the world.',
      additionalInfo:
        'Corn is a good source of fiber, vitamins, and minerals, making it a healthy addition to any meal.',
      overview:
        'Whether grilled, boiled, or roasted, corn is a versatile ingredient that can be used in salads, soups, stews, and more.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/organick-f1be5.appspot.com/o/images%2Fproducts-corn.png?alt=media&token=66ba17bb-0d92-437b-8155-1b4148d79361'
    },

    {
      id: 16,
      price: 20,
      discount: 8,
      type: 'nuts',
      name: 'Brown Hazelnut',
      description:
        'Our hazelnuts are carefully handpicked to ensure the highest quality.',
      additionalInfo:
        'Hazelnuts are a rich source of vitamins and minerals, including vitamin E and magnesium.',
      overview:
        'Whether as a snack or an ingredient in your favorite recipes, our hazelnuts are a delicious and healthy choice.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/organick-f1be5.appspot.com/o/images%2Fproducts-brown-hazelnut.png?alt=media&token=3c8f8e2f-4a8b-4a9e-8883-cd5435b52fcf'
    }
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    const repository = queryRunner.connection.getRepository(Product);
    await repository.insert(this.products);
  }

  public async down(): Promise<void> {
    return;
  }
}
