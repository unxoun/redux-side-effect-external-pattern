import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// actions creators:
import { messageUpdated } from "../store/slices/message";

//
export default function ReduxAsyncExternal() {
  //
  const dispatch = useDispatch();

  //
  const fetchAndSetMessage = async () => {
    const result = await asyncAPI.call();
    dispatch(messageUpdated(result.data.message));
  };

  useEffect(() => {
    fetchAndSetMessage();
  }, []);

  //
  const message = useSelector((state) => state.message.value);

  //
  return message;
}
