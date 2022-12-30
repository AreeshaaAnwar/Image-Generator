import { useState, useEffect } from "react";

export const useFetch = (url, method = "GET", token) => {
    console.log("token....." , token)
  const [apidata, setapidata] = useState(null);

  const [isPending, setisPending] = useState(false);

  const [error, setError] = useState(null);

  const [options, setoptions] = useState(null);

  const [message, setmessage] = useState(null);

  const postData = (postData) => {
    if (!token) {
      setoptions({
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(postData),
      });
    }

    if (token) {
      console.log("asdsf", token);
      setoptions({
        method: "POST",

        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify(postData),
      });
    
    }
    else if(token){
      setoptions({
        method: "GET",

        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${token}`,
        },

      });
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchdata = async (fetchOptions) => {
        console.log("options: " , options)
      setisPending(true);

      try {
        setError(null);

        const res = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal,
        });

        const resdata = await res.json();

        console.log(resdata);

        if (!resdata.success) {
          if (resdata.data) {
            if (
              resdata.data.name &&
              resdata.data.email &&
              resdata.data.password
            ) {
              setmessage(
                `${resdata.data.name} ${resdata.data.email} ${resdata.data.password}`
              );
            } else if (resdata.data.name) {
              setmessage(resdata.data.name);
            } else if (resdata.data.email) {
              setmessage(resdata.data.email);
            } else if (resdata.data.password) {
              setmessage(resdata.data.password);
            }
          } else {
            setmessage(resdata.message);
          }

          throw new Error(resdata.message);
        }

        setmessage(resdata.message);

        setapidata(resdata);

        setError(null);

        setisPending(false);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted");
        } else {
          setError("Could not fetch the data");
        }
      }
    };

    if (method === "GET") {
      fetchdata();
    }

    if (method === "POST" && options) {
        console.log(options)
      fetchdata(options);
    }

    return () => {
      controller.abort();
    };
  }, [url, options, method]);

  return { apidata, isPending, error, postData, message }; //custom hook return some kind of array or object
};
