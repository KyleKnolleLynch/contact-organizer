import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;
  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
      text.current.value = '';
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Filter Contacts.."
        onChange={onChange}
        ref={text}
      />
    </form>
  );
};

export default ContactFilter;

////////////////////////////////////////////////////////////
          // * Alternate Method using useState * //

// import React, { useContext, useState } from 'react';
// import ContactContext from '../../context/contact/contactContext';

// const ContactFilter = () => {
//   const { filterContacts, clearFilter, filtered } = useContext(ContactContext);
//   const [text, setText] = useState('');

//   return (
//     <form>
//       <input
//         type="text"
//         placeholder="Filter Contacts.."
//         onChange={e => {
//           if (e.target.value) {
//             setText(e.target.value);
//             filterContacts(text);
//           } else {
//             clearFilter();
//           }
//         }}
//       />
//     </form>
//   );
// };

// export default ContactFilter;
