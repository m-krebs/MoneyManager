// https://realtimecolors.com/?colors=ffffff-00213d-71fead-002647-437e60
// https://realtimecolors.com/?colors=ffffff-1e1e22-73f190-17181b-3b974e
"use client";

import Button from "@/components/ui/Button";
import { FC, useState } from "react";
import { signIn } from "next-auth/react";

const Page: FC = () => {
  const [isLoadingGoogle, setIsLoadingGoogle] = useState<boolean>(false);
  const [isLoadingGitHub, setIsLoadingGitHub] = useState<boolean>(false);

  async function loginWithGoogle() {
    setIsLoadingGoogle(true);
    try {
      await signIn("google");
    } catch (error) {
      // display error message to user
      console.log(error);
    } finally {
      setIsLoadingGoogle(false);
    }
  }

  async function loginWithGithub() {
    setIsLoadingGitHub(true);
    try {
      await signIn("github");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingGitHub(false);
    }
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8 p-8 border-secondary border-2 rounded-lg">
          <div className="flex flex-col items-center gap-8">
            logo
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-neutral-50">
              Log in to your account
            </h2>
          </div>

          <div className="flex flex-col items-center gap-3 w-full">
            <Button
              variant={"default"}
              isLoading={isLoadingGoogle}
              type="button"
              className="mx-auto w-full h-12"
              onClick={loginWithGoogle}
            >
              {isLoadingGoogle ? null : (
                <svg
                  className="mr-2 h-4 w-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="github"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
              )}
              Use Google
            </Button>
            <Button
              isLoading={isLoadingGitHub}
              type="button"
              className="max-w-sm mx-auto w-full h-12"
              onClick={loginWithGithub}
            >
              {isLoadingGitHub ? null : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9.35 16.88c0 .07-.07.12-.17.12S9 17 9 16.88s.08-.12.17-.12s.18.05.18.12Zm-1-.15c0 .07 0 .15.14.17a.15.15 0 0 0 .2-.07c0-.07 0-.14-.14-.17s-.18 0-.2.07Zm1.42-.05c-.09 0-.15.08-.14.16s.09.11.19.09s.15-.09.14-.16s-.09-.1-.19-.09ZM11.9 4A7.83 7.83 0 0 0 4 12.07A8.29 8.29 0 0 0 9.47 20c.41.07.56-.19.56-.4v-2s-2.26.5-2.74-1c0 0-.36-1-.89-1.21c0 0-.74-.52.05-.51a1.67 1.67 0 0 1 1.24.85a1.69 1.69 0 0 0 2.36.69a1.83 1.83 0 0 1 .51-1.11c-1.8-.21-3.62-.47-3.62-3.66A2.54 2.54 0 0 1 7.7 9.7a3.21 3.21 0 0 1 .08-2.24c.68-.22 2.23.89 2.23.89a7.46 7.46 0 0 1 4.05 0s1.55-1.11 2.23-.89a3.14 3.14 0 0 1 .08 2.24a2.61 2.61 0 0 1 .83 1.95c0 3.2-1.9 3.45-3.7 3.66a2 2 0 0 1 .5 1.5v2.77a.42.42 0 0 0 .56.4A8.22 8.22 0 0 0 20 12.07A8 8 0 0 0 11.9 4ZM7.14 15.41v.17a.12.12 0 0 0 .17 0s0-.11 0-.18s-.13-.03-.17.01Zm-.35-.27s0 .1.07.13a.09.09 0 0 0 .14 0s0-.1-.07-.13s-.12-.03-.14 0Zm1 1.18v.21c0 .07.17.08.21 0s0-.14 0-.21s-.13-.05-.17 0Zm-.37-.49v.2c0 .08.14.11.19.08a.16.16 0 0 0 0-.21c-.05-.08-.13-.11-.19-.07Z"
                  />
                </svg>
              )}
              Use GitHub
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
