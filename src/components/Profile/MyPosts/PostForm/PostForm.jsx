import React from "react";
import classes from "./PostForm.module.css"


const PostForm = ()=>{
    return (
        <div className={classes.content__form}>
        <form>
          <textarea      extarea
            className={classes.input__posts}
            type={"text"}
            placeholder="Write post"
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    )
}

export default PostForm