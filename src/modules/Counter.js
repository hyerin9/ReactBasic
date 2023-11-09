import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {increment, selectCount} from "./counterSilce";

export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
      <div>
          <span>{count}</span>
          <button
            onClick={() => dispatch(increment())}
          > + </button>
      </div>
    );
}