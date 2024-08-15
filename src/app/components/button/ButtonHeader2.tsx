"use client";

import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { ref, runTransaction } from "firebase/database";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";

export default function ButtonHeart2(props: any) {
  const [isActive, setIsActive] = useState(false);

  const { id, wishlist } = props;

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if (user) {
        const userId = user.uid;

        if(wishlist && wishlist[userId]) {
          setIsActive(true);
        }
      }
    });
  }, []);

  const handleAddWishList = () => {
    const userId = authFirebase?.currentUser?.uid;

    if(id && userId) {
      const songRef = ref(dbFirebase, `/songs/${id}`);
      runTransaction(songRef, (song) => {
        if (song) {
          if (song.wishlist && song.wishlist[userId]) {
            song.wishlist[userId] = null;
            setIsActive(false);
          } else {
            if (!song.wishlist) {
              song.wishlist = {};
            }
            song.wishlist[userId] = true;
            setIsActive(true);
          }
        }
        return song;
      });
    }
  }

  return (
    <>
      <button 
        className={
          "text-[20px] " +
          (isActive ? "text-primary" : "text-white")
        }
        onClick={handleAddWishList}
      >
        <FaRegHeart />
      </button>
    </>
  )
}