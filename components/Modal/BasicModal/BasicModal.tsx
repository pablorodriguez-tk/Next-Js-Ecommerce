import React from 'react';
import { Modal, Icon } from 'semantic-ui-react';

interface BasicModalProps {
  children: React.ReactNode;
  title: string;
  setShow: (value: boolean) => void;
  show: boolean;
  size?: 'mini' | 'tiny' | 'small' | 'large' | 'fullscreen';
}

const BasicModal: React.FC<BasicModalProps> = ({
  children,
  title,
  setShow,
  show,
  size,
}) => {
  const onClose = () => setShow(false);

  return (
    <Modal className="basic-modal" open={show} onClose={onClose} size={size}>
      <Modal.Header>
        <span>{title}</span>
        <Icon name="close" onClick={onClose} />
      </Modal.Header>
      <Modal.Content> {children}</Modal.Content>
    </Modal>
  );
};

export default BasicModal;
