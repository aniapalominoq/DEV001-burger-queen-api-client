import { useState } from "react";

export const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState(initialForm)
  const [loading, setLoading] = useState(initialForm)
   const [response,setResponse]=useState(initialForm)
  
}