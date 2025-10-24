import { useForm } from "react-hook-form";

export default function FormExample() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 480 }}>
      <div style={{ marginBottom: 8 }}>
        <label>Nom</label>
        <input
          {...register("name")}
          style={{ display: "block", width: "100%" }}
        />
      </div>

      <div style={{ marginBottom: 8 }}>
        <label>Email</label>
        <input
          type="email"
          {...register("email")}
          style={{ display: "block", width: "100%" }}
        />
      </div>

      <button type="submit">Envoyer</button>
    </form>
  );
}
