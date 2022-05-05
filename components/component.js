import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import asyncAPI from "../../tools/async-api";

// actions
import { messageUpdated } from "../../store/slices/message";

//
export default function ReduxAsyncExternal() {
  //
  const dispatch = useDispatch();

  //
  const fetchAndSetData = async () => {
    const result = await asyncAPI.call();
    dispatch(messageUpdated(result.data.message));
  };

  useEffect(() => {
    fetchAndSetData();
  }, []);

  //
  const message = useSelector((state) => state.message.value);

  //
  return message;
}
