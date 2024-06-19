import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, Image, Avatar, TextInput, Pressable} from 'react-native';
import { exportName,exportEmail } from './LoginScreen';

const FeaturedJob = [
    {
        id :'1',
        companyLogo:require('./assets/facebook.png'),
        jobTitle: "Software Engineer",
        companyName:"Facebook",
        salary:"$180,000",
        location:"Accra, Ghana",
        backgroundColor: "red",
    },
    {
        id :'2',
        companyLogo:require('./assets/google.png'),
        jobTitle: "System Administrator",
        companyName:"Google",
        salary:"$160,000",
        location:"Accra, Ghana",
        backgroundColor: "blue",
    },
    {
        id :'3',
        companyLogo:require('./assets/apple.png'),
        jobTitle: "Database Administrator",
        companyName:"Apple",
        salary:"$210,000",
        location:"Accra, Ghana",
        backgroundColor: "black",
    }

]


const FeaturedJobCard = ({ companyLogo, jobTitle, companyName, salary, location, backgroundColor }) => {
    return (
      <View style={[styles.card, {backgroundColor}]}>
        <Image source={companyLogo} style={styles.logo} />
        <Text style={styles.title}>{jobTitle}</Text>
        <Text style={styles.company}>{companyName}</Text>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    );
  };


  const PopularJob = [
    {
      id: '1',
      title: 'Jr Executive',
      company: 'Burger King',
      location: 'Los Angeles, US',
      salary: '$96,000/y',
      logo: require('./assets/burgerking.png')
    },
    {
      id: '2',
      title: 'Product Manager',
      company: 'Beats',
      location: 'Florida, US',
      salary: '$84,000/y',
      logo: require('./assets/beats.png')
    },
    {
      id: '3',
      title: 'Product Manager',
      company: 'Facebook',
      location: 'Florida, US',
      salary: '$86,000/y',
      logo: require('./assets/facebook2.png')
    },
    {
        id: '4',
        title: 'Data Analyst',
        company: 'Apple',
        location: 'Florida, US',
        salary: '$120,000/y',
        logo: require('./assets/apple2.png')
      },
  ];


  const PopularJobList = ({logo, title, company, location, salary}) => {
    return (
        <View  style={styles.jobscontainer}>
            <View style={{padding:20}}>
                <Image source={logo}/>
            </View>
            <View>
                <View style={styles.job}>
                    <Text>
                        {title}
                    </Text>
                    <Text>
                        {salary}
                    </Text>
            </View>
            <View style={styles.jobb}>
                    <Text>
                        {company}
                    </Text>
                    <Text>
                        {location}
                    </Text>
            </View>
        </View>
        
    </View>
    )
  }


 
const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.homeHeader}>
              <View style={{fontFamily: 'Poppins',}}>
                  <Text style={{fontSize: 30, color:'#0D0D26',fontWeight: 700}}>{exportName}</Text>
                  <Text style={{fontSize:20, color:'#95969D', fontWeight: 400}}>{exportEmail}</Text>
              </View>
              <View>
                  <Image source={require('./assets/profileImage.png')}/>
                  {/* <Badge value='' status='error' containerStyle={{position:'absolute', right:1, top:7, backgroundColor:'white', borderRadius:10, padding:3}}/> */}
              </View>            
            </View>

            <View style={styles.rows}>
              <View style={styles.searchBox}>
                <View>
                  {/* <Icon name='search' size={30} style={{opacity:0.2, paddingRight:200, marginTop:10}}/> */}
                  <TextInput placeholder='Search for a job or position' style={{fontWeight: 'bold', marginLeft: 30, opacity:0.7, paddingRight:-50, height:40}}/>
                </View>
              </View>

              <View>
                <Pressable>
                  <TextInput editable={false} style={{backgroundColor:'#ECECE9', height:46, width: 48, borderRadius:10}}/>
                  <Image source={require('./assets/slider.png')} style={{marginTop: -38, height: 30, marginLeft:11}}/>
                </Pressable>
              </View>
            </View>

        <ScrollView>
        <View>
        <View style={styles.rows}>
              <Text style={{fontSize: 18, color:'#0D0D26', fontWeight:'bold'}}>Featured Jobs</Text>
              <Text style={{fontSize: 14, color:'#95969D', fontWeight:400, marginTop:6}}>See All</Text>
            </View>
        </View>
        <View>
        <View>
        <FlatList
        data={FeaturedJob}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
            <FeaturedJobCard
            companyLogo={item.companyLogo}
            jobTitle={item.jobTitle}
            companyName={item.companyName}
            salary={item.salary}
            location={item.location}
            backgroundColor={item.backgroundColor}
            />
        )}
        />
      </View>    

      <View style={styles.rows}>
              <Text style={{fontSize: 18, color:'#0D0D26', fontWeight:'bold'}}>Popular Jobs</Text>
              <Text style={{fontSize: 14, color:'#95969D', fontWeight:400, marginTop:6}}>See All</Text>
            </View>

      <View>
        <FlatList
        data={PopularJob}
        vertical
        renderItem={({item})=>(
            <PopularJobList
            logo={item.logo}
            location={item.location}
            salary={item.salary}
            title={item.title}
            company={item.company}
            />
        )}
        />
      </View>


    </View>
    
        </ScrollView>    
        
        </View>

    
  );
};  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingVertical: 100,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  homeHeader: {
    flexDirection: 'row',
    justifyContent: "space-between",
    fontFamily: 'Lato',
    marginBottom:30,
    color:'#000000',
  },
  card: {
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    width: 250,
    height: 150,
    marginRight: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
    borderRadius:10,
    backgroundColor:'f0f0f0',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 62,
    marginTop: -55,
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 25,
  },
  company: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 62,
  },
  salary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 50,
  },
  location: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 120,
    marginTop: -17
  },
  jobscontainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    height: 80,
    marginBottom: 20,
    borderRadius: 20
  },
  job: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '83%', 
    marginTop: 10,
 },
 searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: '#ECECE9',
    width:290,
    height: 45,
  },
 jobb: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '83%', 
    marginTop: 30,
 },
});


export default HomeScreen;
