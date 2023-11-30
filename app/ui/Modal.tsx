import { XMarkIcon } from '@heroicons/react/20/solid';
import {
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Close,
} from '@radix-ui/react-dialog';

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
  description?: string | null;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => {
  return (
    <Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Portal>
        <Overlay className="fixed inset-0 grid place-items-center overflow-y-auto bg-black/60 p-8">
          <Content
            className=" 
            h-full 
            max-h-full 
            w-full  
            rounded-md 
            border
            border-neutral-700
            bg-secondary-background_light
            p-[25px] 
            drop-shadow-md 
            focus:outline-none 
            dark:bg-secondary-background_dark 
            md:h-auto 
            md:w-[90vw] 
            md:max-w-[500px]"
          >
            <Title className="mb-4 text-left text-xl">{title}</Title>
            <Description className="mb-5 text-left text-sm leading-normal">
              {description}
            </Description>
            <div>{children}</div>
            <Close asChild>
              <button
                className="
                absolute 
                right-[10px] 
                top-[10px] 
                inline-flex 
                h-[25px] 
                w-[25px] 
                appearance-none 
                items-center 
                justify-center 
                rounded-full 
                text-neutral-400 
                hover:text-white 
                focus:outline-none
              "
                aria-label="Close"
              >
                <XMarkIcon />
              </button>
            </Close>
          </Content>
        </Overlay>
      </Portal>
    </Root>
  );
};

export default Modal;
