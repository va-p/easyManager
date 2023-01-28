import React, { useCallback, useRef, useState } from 'react';
import { Alert, FlatList, RefreshControl } from 'react-native';
import {
  Container,
  Products,
  ListEmptyContainer,
  ListEmptyText
} from './styles';

import { collection, query, onSnapshot, setDoc, doc } from 'firebase/firestore';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { useFocusEffect } from '@react-navigation/native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useDispatch, useSelector } from 'react-redux';
import { format, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import uuid from 'react-native-uuid';


import { ProductListItem, ProductProps } from '@components/ProductListItem';
import { SkeletonHomeScreen } from '@components/SkeletonHomeScreen';
import { Header } from '@components/Header';
import { Modal } from '@components/Modal';

import {
  setProductId,
  setProductTitle,
  setProductDescription,
  selectProductTitle,
  setProductType,
  setProductPrice,
  setProductRating,
  setProductImageUri,
  setProductHeight,
  setProductWidth
} from '@slices/productSlice';

import { EditProduct } from '@screens/EditProduct';


import { db } from '@configs/firebaseConfig';

export function Home() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  /*
    const [productsForImported, setProductsForImported] = useState([{
      "title": "Brown eggs",
      "type": "dairy",
      "description": "Raw organic brown eggs in a basket",
      "filename": "0.jpg",
      "height": 600,
      "width": 400,
      "price": 28.1,
      "rating": 4
    }, {
      "title": "Sweet fresh stawberry",
      "type": "fruit",
      "description": "Sweet fresh stawberry on the wooden table",
      "filename": "1.jpg",
      "height": 450,
      "width": 299,
      "price": 29.45,
      "rating": 4
    }, {
      "title": "Asparagus",
      "type": "vegetable",
      "description": "Asparagus with ham on the wooden table",
      "filename": "2.jpg",
      "height": 450,
      "width": 299,
      "price": 18.95,
      "rating": 3
    }, {
      "title": "Green smoothie",
      "type": "dairy",
      "description": "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
      "filename": "3.jpg",
      "height": 600,
      "width": 399,
      "price": 17.68,
      "rating": 4
    }, {
      "title": "Raw legums",
      "type": "vegetable",
      "description": "Raw legums on the wooden table",
      "filename": "4.jpg",
      "height": 450,
      "width": 299,
      "price": 17.11,
      "rating": 2
    }, {
      "title": "Baking cake",
      "type": "dairy",
      "description": "Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",
      "filename": "5.jpg",
      "height": 450,
      "width": 675,
      "price": 11.14,
      "rating": 4
    }, {
      "title": "Pesto with basil",
      "type": "vegetable",
      "description": "Italian traditional pesto with basil, chesse and oil",
      "filename": "6.jpg",
      "height": 450,
      "width": 299,
      "price": 18.19,
      "rating": 2
    }, {
      "title": "Hazelnut in black ceramic bowl",
      "type": "vegetable",
      "description": "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
      "filename": "7.jpg",
      "height": 450,
      "width": 301,
      "price": 27.35,
      "rating": 0
    }, {
      "title": "Fresh stawberry",
      "type": "fruit",
      "description": "Sweet fresh stawberry on the wooden table",
      "filename": "8.jpg",
      "height": 600,
      "width": 399,
      "price": 28.59,
      "rating": 4
    }, {
      "title": "Lemon and salt",
      "type": "fruit",
      "description": "Rosemary, lemon and salt on the table",
      "filename": "9.jpg",
      "height": 450,
      "width": 299,
      "price": 15.79,
      "rating": 5
    }, {
      "title": "Homemade bread",
      "type": "bakery",
      "description": "Homemade bread",
      "filename": "10.jpg",
      "height": 450,
      "width": 301,
      "price": 17.48,
      "rating": 3
    }, {
      "title": "Legums",
      "type": "vegetable",
      "description": "Cooked legums on the wooden table",
      "filename": "11.jpg",
      "height": 600,
      "width": 399,
      "price": 14.77,
      "rating": 0
    }, {
      "title": "Fresh tomato",
      "type": "vegetable",
      "description": "Fresh tomato juice with basil",
      "filename": "12.jpg",
      "height": 600,
      "width": 903,
      "price": 16.3,
      "rating": 2
    }, {
      "title": "Healthy breakfast",
      "type": "fruit",
      "description": "Healthy breakfast set. rice cereal or porridge with berries and honey over rustic wood background",
      "filename": "13.jpg",
      "height": 450,
      "width": 350,
      "price": 13.02,
      "rating": 2
    }, {
      "title": "Green beans",
      "type": "vegetable",
      "description": "Raw organic green beans ready to eat",
      "filename": "14.jpg",
      "height": 450,
      "width": 300,
      "price": 28.79,
      "rating": 1
    }, {
      "title": "Baked stuffed portabello mushrooms",
      "type": "bakery",
      "description": "Homemade baked stuffed portabello mushrooms with spinach and cheese",
      "filename": "15.jpg",
      "height": 600,
      "width": 400,
      "price": 20.31,
      "rating": 1
    }, {
      "title": "Strawberry jelly",
      "type": "fruit",
      "description": "Homemade organic strawberry jelly in a jar",
      "filename": "16.jpg",
      "height": 400,
      "width": 600,
      "price": 14.18,
      "rating": 1
    }, {
      "title": "Pears juice",
      "type": "fruit",
      "description": "Fresh pears juice on the wooden table",
      "filename": "17.jpg",
      "height": 600,
      "width": 398,
      "price": 19.49,
      "rating": 4
    }, {
      "title": "Fresh pears",
      "type": "fruit",
      "description": "Sweet fresh pears on the wooden table",
      "filename": "18.jpg",
      "height": 600,
      "width": 398,
      "price": 15.12,
      "rating": 5
    }, {
      "title": "Caprese salad",
      "type": "vegetable",
      "description": "Homemade healthy caprese salad with tomato mozzarella and basil",
      "filename": "19.jpg",
      "height": 400,
      "width": 600,
      "price": 16.76,
      "rating": 5
    }, {
      "title": "Oranges",
      "type": "fruit",
      "description": "Orange popsicle ice cream bars made from fresh oranges.  a refreshing summer treat.",
      "filename": "20.jpg",
      "height": 450,
      "width": 274,
      "price": 21.48,
      "rating": 4
    }, {
      "title": "Vegan food",
      "type": "vegetable",
      "description": "Concept of vegan food",
      "filename": "21.jpg",
      "height": 450,
      "width": 299,
      "price": 29.66,
      "rating": 4
    }, {
      "title": "Breakfast with muesli",
      "type": "dairy",
      "description": "Concept of healthy breakfast with muesli",
      "filename": "22.jpg",
      "height": 450,
      "width": 299,
      "price": 22.7,
      "rating": 2
    }, {
      "title": "Honey",
      "type": "bakery",
      "description": "Honey and honeycell on the table",
      "filename": "23.jpg",
      "height": 450,
      "width": 299,
      "price": 17.01,
      "rating": 2
    }, {
      "title": "Breakfast with cottage",
      "type": "fruit",
      "description": "Healthy breakfast with cottage cheese and strawberry",
      "filename": "24.jpg",
      "height": 600,
      "width": 398,
      "price": 14.05,
      "rating": 1
    }, {
      "title": "Strawberry smoothie",
      "type": "fruit",
      "description": "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over dark background",
      "filename": "25.jpg",
      "height": 600,
      "width": 400,
      "price": 28.86,
      "rating": 2
    }, {
      "title": "Strawberry and mint",
      "type": "fruit",
      "description": "Homemade muesli with strawberry and mint",
      "filename": "26.jpg",
      "height": 450,
      "width": 299,
      "price": 26.21,
      "rating": 4
    }, {
      "title": "Ricotta",
      "type": "dairy",
      "description": "Ricotta with berry and mint",
      "filename": "27.jpg",
      "height": 600,
      "width": 398,
      "price": 27.81,
      "rating": 5
    }, {
      "title": "Cuban sandwiche",
      "type": "bakery",
      "description": "Homemade traditional cuban sandwiches with ham pork and cheese",
      "filename": "28.jpg",
      "height": 450,
      "width": 300,
      "price": 18.5,
      "rating": 4
    }, {
      "title": "Granola",
      "type": "dairy",
      "description": "Glass jar with homemade granola and yogurt with nuts, raspberries and blackberries on wooden cutting board over white textile in day light",
      "filename": "29.jpg",
      "height": 450,
      "width": 300,
      "price": 29.97,
      "rating": 3
    }, {
      "title": "Smoothie with chia seeds",
      "type": "fruit",
      "description": "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over wooden table",
      "filename": "30.jpg",
      "height": 600,
      "width": 900,
      "price": 25.26,
      "rating": 5
    }, {
      "title": "Yogurt",
      "type": "dairy",
      "description": "Homemade yogurt with raspberry and mint",
      "filename": "31.jpg",
      "height": 450,
      "width": 299,
      "price": 27.61,
      "rating": 4
    }, {
      "title": "Sandwich with salad",
      "type": "vegetable",
      "description": "Vegan sandwich with salad, tomato and radish",
      "filename": "32.jpg",
      "height": 600,
      "width": 398,
      "price": 22.48,
      "rating": 5
    }, {
      "title": "Cherry",
      "type": "fruit",
      "description": "Cherry with sugar on old table",
      "filename": "33.jpg",
      "height": 600,
      "width": 400,
      "price": 14.35,
      "rating": 5
    }, {
      "title": "Raw asparagus",
      "type": "vegetable",
      "description": "Raw fresh asparagus salad with cheese and dressing",
      "filename": "34.jpg",
      "height": 600,
      "width": 400,
      "price": 22.97,
      "rating": 4
    }, {
      "title": "Corn",
      "type": "vegetable",
      "description": "Grilled corn on the cob with salt and butter",
      "filename": "35.jpg",
      "height": 450,
      "width": 300,
      "price": 13.55,
      "rating": 2
    }, {
      "title": "Vegan",
      "type": "vegan",
      "description": "Concept of healthy vegan eating",
      "filename": "36.jpg",
      "height": 600,
      "width": 398,
      "price": 28.96,
      "rating": 5
    }, {
      "title": "Fresh blueberries",
      "type": "fruit",
      "description": "Healthy breakfast. berry crumble with fresh blueberries, raspberries, strawberries, almond, walnuts, pecans, yogurt, and mint in ceramic plates over white wooden surface, top view",
      "filename": "37.jpg",
      "height": 450,
      "width": 321,
      "price": 21.01,
      "rating": 4
    }, {
      "title": "Smashed avocado",
      "type": "fruit",
      "description": "Vegan sandwiches with smashed avocado, tomatoes and radish. top view",
      "filename": "38.jpg",
      "height": 450,
      "width": 450,
      "price": 25.88,
      "rating": 0
    }, {
      "title": "Italian ciabatta",
      "type": "bakery",
      "description": "Italian ciabatta bread cut in slices on wooden chopping board with herbs, garlic and olives over dark grunge backdrop, top view",
      "filename": "39.jpg",
      "height": 450,
      "width": 565,
      "price": 15.18,
      "rating": 1
    }, {
      "title": "Rustic breakfast",
      "type": "dairy",
      "description": "Rustic healthy breakfast set. cooked buckwheat groats with milk and honey on dark grunge backdrop. top view, copy space",
      "filename": "40.jpg",
      "height": 450,
      "width": 307,
      "price": 21.32,
      "rating": 0
    }, {
      "title": "Sliced lemons",
      "type": "fruit",
      "description": "Heap of whole and sliced lemons and limes with mint in vintage metal grid box over old wooden table with turquoise wooden background. dark rustic style.",
      "filename": "41.jpg",
      "height": 600,
      "width": 900,
      "price": 27.14,
      "rating": 2
    }, {
      "title": "Plums",
      "type": "fruit",
      "description": "Yellow and red sweet plums",
      "filename": "42.jpg",
      "height": 450,
      "width": 299,
      "price": 19.18,
      "rating": 1
    }, {
      "title": "French fries",
      "type": "bakery",
      "description": "Homemade oven baked french fries with ketchup",
      "filename": "43.jpg",
      "height": 600,
      "width": 400,
      "price": 18.32,
      "rating": 3
    }, {
      "title": "Strawberries",
      "type": "fruit",
      "description": "Healthy breakfast set. rice cereal or porridge with fresh strawberry, apricots, almond and honey over white rustic wood backdrop, top view, \u0000",
      "filename": "44.jpg",
      "height": 450,
      "width": 352,
      "price": 15.13,
      "rating": 3
    }, {
      "title": "Ground beef meat burger",
      "type": "meat",
      "description": "Raw ground beef meat burger steak cutlets with seasoning on vintage wooden boards, black background",
      "filename": "45.jpg",
      "height": 450,
      "width": 675,
      "price": 11.73,
      "rating": 5
    }, {
      "title": "Tomatoes",
      "type": "fruit",
      "description": "Organic tomatoes made with love",
      "filename": "46.jpg",
      "height": 450,
      "width": 675,
      "price": 26.03,
      "rating": 4
    }, {
      "title": "Basil",
      "type": "vegetable",
      "description": "Concept of vegan food with basil",
      "filename": "47.jpg",
      "height": 450,
      "width": 678,
      "price": 15.19,
      "rating": 4
    }, {
      "title": "Fruits bouquet",
      "type": "fruit",
      "description": "Abstract citrus fruits bouquet on blue background",
      "filename": "48.jpg",
      "height": 600,
      "width": 401,
      "price": 18.18,
      "rating": 1
    }, {
      "title": "Peaches on branch",
      "type": "fruit",
      "description": "Peaches on branch with leaves and glasses with peach juice and limonade with ice cubes in aluminum tray over old metal table. dark rustic style. top view.",
      "filename": "49.jpg",
      "height": 600,
      "width": 400,
      "price": 25.62,
      "rating": 3
    }]
    );
    */

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const productTitle = useSelector(selectProductTitle);


  /*
  function uploadProducts() {
    productsForImported.forEach(async function (obj) {
      try {
        const id = uuid.v4();
        await setDoc(doc(db, 'products', id), {
          id: id,
          title: obj.title,
          type: obj.title,
          description: obj.description,
          filename: obj.filename,
          height: obj.height,
          width: obj.width,
          price: obj.price,
          rating: obj.rating,
          created_at: new Date(),
        });      
      } catch (error) {
        console.error(error);
      }
    });
  };
  */

  async function fetchProducts() {
    setLoading(true);

    try {
      const values = query(collection(db, 'products'));
      onSnapshot(values, (snapshot) => {
        const productsData = snapshot.docs.map(doc => ({
          id: doc.data().id,
          title: doc.data().title,
          type: doc.data().type,
          description: doc.data().description,
          filename: doc.data().filename,
          height: doc.data().height,
          width: doc.data().width,
          price: doc.data().price,
          rating: doc.data().rating,
          created: doc.data().created_at,
        }))

        let priceFormatted: any;
        let productsFormatted: any = [];
        for (const item of productsData) {
          var dmy = format(new Date(item.created.toDate()), 'dd/MM/yyyy', { locale: ptBR })
          priceFormatted = item.price
            .toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            });

          if (!productsFormatted.hasOwnProperty(dmy)) {
            productsFormatted[item.id] = {
              id: item.id,
              title: item.title,
              type: item.type,
              description: item.description,
              filename: item.filename,
              height: item.height,
              width: item.width,
              price: priceFormatted,
              rating: item.rating,
              created: dmy,
            };
          }
          productsFormatted = Object.values(productsFormatted).sort((a: any, b: any) => {
            const firstDateParsed = parse(a.created_at, 'dd/MM/yyyy', new Date());
            const secondDateParsed = parse(b.created_at, 'dd/MM/yyyy', new Date());
            return secondDateParsed.getTime() - firstDateParsed.getTime();
          })
        };

        setProducts(productsFormatted);
      });
    } catch (error) {
      console.error(error);
      Alert.alert("Produtos", "Não foi possível editar o produto. verifique sua conexão com a internet e tente novaente")
    } finally {
      setLoading(false);
    }
  };


  function handleOpenProduct(product: ProductProps) {
    dispatch(
      setProductId(product.id)
    );
    dispatch(
      setProductTitle(product.title)
    );
    dispatch(
      setProductType(product.type)
    );
    dispatch(
      setProductDescription(product.description)
    );
    /*dispatch(
      setProductImageUri(product.productImage?.image.url)
    );*/
    dispatch(
      setProductHeight(product.height)
    );
    dispatch(
      setProductWidth(product.width)
    );
    dispatch(
      setProductPrice(product.price)
    );
    dispatch(
      setProductRating(product.rating)
    );

    bottomSheetRef.current?.present();
  };


  function handleCloseProduct() {
    bottomSheetRef.current?.dismiss();
  };


  useFocusEffect(useCallback(() => {
    fetchProducts();
    //uploadProducts();
  }, []));

  console.log(products[11]);

  if (loading) {
    return <SkeletonHomeScreen />
  }

  return (
    <Container>
      <Header type='secondary' title="Produtos" />

      <Products>
        <FlatList
          data={products}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => (
            <ProductListItem
              data={item}
              actions={() => handleOpenProduct(item)}
            />
          )}
          ListEmptyComponent={() => (
            <ListEmptyContainer>
              <ListEmptyText>Nenhum produto cadastrado. Cadastre produtos para visualizá-los aqui.</ListEmptyText>
            </ListEmptyContainer>
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={fetchProducts} />
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace() + 80
          }}
        />
      </Products>

      <Modal
        title={`Editar o produto ${productTitle}`}
        bottomSheetRef={bottomSheetRef}
        snapPoints={['90%']}
      >
        <EditProduct
          closeProduct={handleCloseProduct}
        />
      </Modal>
    </Container>
  );
}