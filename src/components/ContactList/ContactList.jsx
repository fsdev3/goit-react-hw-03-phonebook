import { Contact } from 'components/Contact/Contact';
import PropTypes from 'prop-types';

export function ContactList({ list, onDeleteItem }) {
  return list.map(item => {
    return (
      <Contact
        key={item.id}
        contact={item}
        onDelete={() => onDeleteItem(item.id)}
      />
    );
  });
}

ContactList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  onDelItem: PropTypes.func,
};
