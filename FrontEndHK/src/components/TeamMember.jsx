export default function TeamMember({ name, role, image, description }) {
  return (
    <div className="flex flex-col items-center justify-center border-solid border-2 p-8 mx-1 rounded-2xl min-w-full md:w-2/5 md:min-w-0">
      <img src={image} alt={name} className="w-48 h-48 rounded-full" />
      <div className="text-xl font-semibold mt-4">{name}</div>
      <div className="text-lg text-gray-500">{role}</div>
      <div className="text-sm text-gray-500">{description}</div>
    </div>
  );
}
