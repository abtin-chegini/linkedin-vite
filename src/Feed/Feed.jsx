import React, { useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
import "./Feed.css";
import InputOption from "../InputOption/InputOption";
import ImageIcon from "@mui/icons-material/Image";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import CalenderViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Posts from "../Posts/Posts";
// import { db, authDomain, firebaseApp } from "../Firebase/Firebase";
import { useState } from "react";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
//   setDoc,
// } from "firebase/firestore";
import { supabase } from "../supabase";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState([]);

  // const usersCollectionRef = collection(db, "posts");

  useEffect(() => {
    async function FetchData() {
      // const data =  await getDocs(usersCollectionRef);
      // collection name
      // setPosts(
      //   data.docs.map((doc) => ({
      //     id: doc.id,
      //     data: doc.data(),
      //   }))
      // )

      let { data: postsFromServer, error } = await supabase
        .from("posts")
        .select("*");
      // console.log(postsFromServer);
      if (postsFromServer) {
        setPosts(
          postsFromServer.map((doc) => ({
            id: doc.id,
            name: doc.name,
            title: doc.title,
            description: doc.description,
            message: doc.message,
            photoUrl: doc.avatar,
          }))
        );
      }
    }
    FetchData();

    // fetchDataPosts();
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("posts")
      .insert([
        {
          title: "asghar",
          message: input,
          avatar: "abtin.chegini@gmail.com",
          description: "asdadsdaad",
        },
      ]);
    // await addDoc(usersCollectionRef, {
    //   name: "abtinCheg",
    //   title: "Test title",
    //   Description: "ffffffffff",
    //   message: input,
    //   photoUrl: "",
    //   // TimeStamp: firebaseApp.FieldValue.serverTimeStamp(),
    // });
  };



  // async function fetchDataPosts() {

  //   let { data: postsFromServer, error } = await supabase
  //   .from('posts')
  //   .select('*');
  //         setPosts(
  //           postsFromServer.map((doc) => ({
  //             id: doc.id,
  //             data: doc.name,

  //           })

  //           )
  //         )
  //   console.log(postsFromServer);
  //   console.log(posts);

  // }

  // console.log(posts);
  return (
    <div className="feed">
      <div className="feed_container">
        <div className="feed_input">
          <CreateIcon></CreateIcon>
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="feed_button" onClick={sendPost}>
              {" "}
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOption">
          <InputOption
            Icon={ImageIcon}
            title="photo"
            color="#70B5F9"
          ></InputOption>
          <InputOption
            Icon={SubscriptionsIcon}
            title="Video"
            color="#E7A33E"
          ></InputOption>
          <InputOption
            Icon={EventNoteIcon}
            title="Event"
            color="#C0CBCD"
          ></InputOption>
          <InputOption
            Icon={CalenderViewDayIcon}
            title="WriteArticle"
            color="#7FC15E"
          ></InputOption>
        </div>
      </div>
      {console.log(posts)}
      {posts.map(({ id, name, description, message, photoUrl }) => (
        <Posts
          key={id}
          name={name}
          description={description}
          message={message}
          avatarAddress={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
