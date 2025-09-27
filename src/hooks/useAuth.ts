"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  login,
  register,
  logoutAction,
  updateUser,
  changePassword,
  hydrateAuth,
} from "@/redux/Client/Auth/Action";
import { LoginRequest } from "@/types/Client/Auth/LoginRequest";
import { Register } from "@/types/Client/Auth/Register";
import { LogoutRequest } from "@/types/Client/Auth/LogoutRequest";
import { useCallback } from "react";

export const useAuth = () => {
  const dispatch = useDispatch();

  const { user, token, roles, loading, error, isLogin } = useSelector(
    (state: RootState) => state.auth
  );

  // ================== LOGIN ==================
  const handleLogin = useCallback(
    async (data: LoginRequest, onSuccess?: any, onError?: any) => {
      try {
        await dispatch<any>(
          login(data, (res: any) => {
            // Map dữ liệu từ backend trả về
            const mappedUser = {
              fullName: res.data.fullName || res.name || "No name",
              email: res.data.email || "",
              token: res.data.token,
              roles: res.data.roleNames || [],
            };

            // Lưu vào localStorage
            localStorage.setItem("token", mappedUser.token);
            localStorage.setItem("roles", JSON.stringify(mappedUser.roles));
            localStorage.setItem("user", JSON.stringify(mappedUser));
            console.log("Userxxxx: ", mappedUser)

            if (onSuccess) onSuccess(mappedUser);
          }, onError)
        );
      } catch (err) {
        if (onError) onError(err);
      }
    },
    [dispatch]
  );

  // ================== REGISTER ==================
  const handleRegister = useCallback(
    (data: Register, onSuccess?: any, onError?: any) => {
      dispatch<any>(register(data, onSuccess, onError));
    },
    [dispatch]
  );

  // ================== LOGOUT ==================
  const handleLogout = useCallback(
    (logoutRequest: LogoutRequest, onSuccess?: any, onError?: any) => {
      dispatch<any>(logoutAction(logoutRequest, () => {
        // Clear localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("roles");
        localStorage.removeItem("user");

        if (onSuccess) onSuccess();
      }, onError));
    },
    [dispatch]
  );

  // ================== UPDATE USER ==================
  const handleUpdateUser = useCallback(
    (formData: FormData, onSuccess?: any, onError?: any) => {
      dispatch<any>(updateUser(formData, onSuccess, onError));
    },
    [dispatch]
  );

  // ================== CHANGE PASSWORD ==================
  const handleChangePassword = useCallback(
    (data: any, onSuccess?: any, onError?: any) => {
      dispatch<any>(changePassword(data, onSuccess, onError));
    },
    [dispatch]
  );

  // ================== HYDRATE AUTH ==================
  const handleHydrateAuth = useCallback(() => {
    const token = localStorage.getItem("token");
    const roles = JSON.parse(localStorage.getItem("roles") || "[]");
    const user = JSON.parse(localStorage.getItem("user") || "null");

    dispatch<any>(
      hydrateAuth()
    );
  }, [dispatch]);

  return {
    user,
    token,
    roles,
    isLogin,
    loading,
    error,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    updateUser: handleUpdateUser,
    changePassword: handleChangePassword,
    hydrateAuth: handleHydrateAuth,
  };
};
