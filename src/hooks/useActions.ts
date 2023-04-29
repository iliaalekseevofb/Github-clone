import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actions as repositoriesActions } from "../store/repositories/repositories.slice";

const rootActions = {
  ...repositoriesActions
}
export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(
    rootActions,
    dispatch
  ), [dispatch])
}
