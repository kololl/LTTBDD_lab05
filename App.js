import { StatusBar } from 'expo-status-bar';
import { FlatList, 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image, 
 
  TouchableOpacity } 
  from 'react-native';

export default function App() {
  const DATA = [
    {
      id: 1,
      title: 'Ca nấu lẩu, nấu mì mini ...',
      image: require('./img/ca_nau_lau.png'),
      shop: 'DeVang'

    },
    {
      id: 2,
      title: '1 kg khô gà bơ tỏi',
      image: require('./img/ga_bo_toi.png'),
      shop: 'LTD Food'
    },
    {
      id: 3,
      title: 'Xe cân cẩu đa năng',
      image: require('./img/xa_can_cau.png'),
      shop: 'Thế giới đồ chơi',

    },
    {
      id: 4,
      title: 'Đồ chơi dạng mô hình',
      image: require('./img/do_choi_dang_mo_hinh.png'),
      shop: 'Thế giới đồ chơi'

    },
    {
      id: 5,
      title: 'Lảnh đạo giản đơn',
      image: require('./img/lanh_dao_gian_don.png'),
      shop: 'LTD Food'
    },
    {
      id: 6,
      title: 'Hiểu lòng con trẻ',
      image: require('./img/hieu_long_con_tre.png'),
      shop: 'Thế giới đồ chơi',

    },
  ];
  // view item

  const oneItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.itemComponent}>
        <Image source={item.image} style={styles.img}></Image>
      </View>
      <View style={styles.content}>
        <Text>{item.title}</Text>
        <View style={styles.content2}>
          <Text style={{ color: 'gray', marginRight: 30 }}>Shop</Text>
          <Text style={{ color: 'red' }}>{item.shop}</Text>
        </View>

      </View>
      <View styles={{}}>
      <TouchableOpacity
          style={styles.buttonMua}
          onPress={() => {
            alert("you clicked me");
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Chat
          </Text>
        </TouchableOpacity>

      </View>


    </View>

  )
  herderComponent = () => {
    return <Text style={styles.headerTitle}>Bạn có thắc với sản phẩm vừa xem đừng ngại chát với shop !</Text>
  }
  itemSeparator = () => {
    return <View style={styles.separator} />
  }
  return (
    <View style={styles.container}>
      <View style={styles.herder}>
        <Image source={require('./img/ant-design_arrow-left-outlined.png')} style={{ marginLeft: 20, marginTop: 30 }}></Image>
        <Text style={{ marginLeft: 140, marginTop: 30, color: 'white', fontSize: 20 }}>Chat</Text>
        <Image source={require('./img/bi_cart-check.png')} style={{ marginLeft: 130, marginTop: 30 }}></Image>
      </View>
      <SafeAreaView style={styles.body}>
        <FlatList
          ListHeaderComponentStyle={styles.listHeader}
          ListHeaderComponent={herderComponent}
          data={DATA}
          renderItem={oneItem}    
          ItemSeparatorComponent={itemSeparator}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
      <View style={styles.footer}>
        <Image source={require('./img/icon.png')} style={{ marginLeft: 50, marginTop: 30 }}></Image>
        <Image source={require('./img/Vector.png')} style={{ marginLeft: 100, marginTop: 30 }}></Image>
        <Image source={require('./img/return.png')} style={{ marginLeft: 130, marginTop: 30 }}></Image>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    
  },
  herder: {
    height: '10%',
    backgroundColor: '#1ba9ff',
    width: "100%",
    flexDirection: 'row',


  },
  body:{
    height: '80%',
    paddingLeft: 5
  },
  footer: {
    height: '12%',
    backgroundColor: '#1ba9ff',
    width: "100%",
    flexDirection: 'row',


  },
  itemComponent: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    height: 80,
    width: 80
  },
  item: {
    height:100,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 13,
  
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CCC'
  },
  listHeader: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'

  },
  headerTitle: {
    fontSize: 17,
    height:100,
    marginTop: 40,
    marginHorizontal:10

  },
  content: {
    width:200,
    marginLeft: 20,
    
  },
  content2: {
    flexDirection: 'row'
  },
  buttonMua: {
    backgroundColor: "red",
    width: 80,
    height: 45,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    
  },

});
