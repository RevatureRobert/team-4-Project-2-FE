import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Post from '../Components/Post/Post';
import IPost from '../model/Post';






const postArr: IPost[] = [
    {
        username:'user1', userProfilePic:'yes', Contents:'There once was a little bunny that ran around', timestamp: 5, postID:'001'
    },
    {
       username:'user2', userProfilePic:'yes', Contents:'He was very cute', image:'yes', timestamp:5, postID:'002',
    },
    {
       username:'user3', userProfilePic:'yes', Contents:'He was very cute', image:'yes', timestamp:5, postID:'003',
    }
]


const PostScreen = () =>
{
    const renderPost = ({ item }) => (
        <View style={styles.item}>
            <Post username={item.username} userProfilePic={item.userProfilePic} Contents={item.Contents} image={item.image} timestamp={item.timestamp} postID={item.postID} />
        </View>
    )  
    
    return (
        <FlatList
            data={postArr}
            renderItem={renderPost}
            keyExtractor={item => item.postID}
            />

        
    );
}
const styles = StyleSheet.create({
    container: {
      //flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
  
    },
    item: {
        marginVertical: 8,
    }
  });

export default PostScreen;