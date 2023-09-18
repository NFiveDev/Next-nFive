'use client';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/react';
import { Button } from '@nextui-org/button';
import { HiPlayCircle } from 'react-icons/hi2';
import { Player } from './player';

type IntroModalProps = {
  modalOpen: string | null | undefined;
};

export function IntroModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        color='secondary'
        variant='bordered'
        size='lg'
        onPress={onOpen}
      >
        Intro <HiPlayCircle className='w-5 h-5 p-0 m-0' />
      </Button>

      <Modal size='2xl' placement='center' isOpen={isOpen} onClose={onClose}>
        <ModalContent className=''>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Introduction Vod
              </ModalHeader>
              <ModalBody>
                <Player />
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Close
                </Button>
                <Button color='primary' onPress={onClose}>
                  Explore
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
