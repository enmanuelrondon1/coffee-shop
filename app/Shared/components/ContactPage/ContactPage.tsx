import WhatsAppButton from "../WhatsApp/WhatsApp";

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Contáctanos</h1>
      <div className="flex justify-center items-center">
        <WhatsAppButton
          phoneNumber="+584248125457" // Incluye el código del país
          message="Hola, me gustaría obtener más información sobre sus servicios"
        />
      </div>
    </div>
  );
};

export default ContactPage;

// import { useState } from 'react';

// interface ContactFormProps {
//   phoneNumber: string;
// }

// const ContactForm: React.FC<ContactFormProps> = ({ phoneNumber }) => {
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const formattedNumber = phoneNumber.replace(/\D/g, "");
//     const fullMessage = encodeURIComponent(`Hola, soy ${name}. ${message}`);
//     const whatsappUrl = `https://wa.me/${formattedNumber}?text=${fullMessage}`;

//     window.open(whatsappUrl, "_blank");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
//       <div>
//         <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//           Nombre
//         </label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//           Mensaje
//         </label>
//         <textarea
//           id="message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           rows={4}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
//           required
//         />
//       </div>

//       <button
//         type="submit"
//         className="w-full flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="20"
//           height="20"
//           fill="currentColor"
//           viewBox="0 0 16 16"
//         >
//           <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z" />
//         </svg>
//         Enviar mensaje por WhatsApp
//       </button>
//     </form>
//   );
// };

// export default ContactForm;
