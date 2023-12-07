import { XMarkIcon } from '@heroicons/react/24/solid';
import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
} from '@radix-ui/react-dialog';

interface ModalProps {
  title: string;
  description?: string | null;
  isOpen: boolean;
  children: React.ReactNode;
  showClose?: boolean;
  onChange: (open: boolean) => void;
}

export function Modal({
  children,
  isOpen,
  onChange,
  title,
  description,
  showClose,
}: ModalProps) {
  return (
    <Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Portal>
        <Overlay className="fixed inset-0 grid select-auto place-items-center overflow-y-auto bg-black/50 p-5 data-[state=open]:animate-overlayShow">
          <Content
            className="
            h-auto
            w-[90vw] 
            max-w-[500px]
            rounded-md
            border
            border-neutral-700 
            bg-secondary-background_light 
            p-[25px] 
            drop-shadow-md 
            focus:outline-none 
            data-[state=open]:animate-contentShow 
            dark:bg-secondary-background_dark"
          >
            <Title className="mb-4 text-xl font-bold">{title}</Title>
            <Description className="mb-5 text-sm leading-normal">
              {description}
            </Description>
            <div>{children}</div>
            {showClose && (
              <Close asChild>
                <button
                  className="absolute right-[15px] top-[25px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center text-secondary-color hover:text-white"
                  aria-label="close"
                >
                  <XMarkIcon />
                </button>
              </Close>
            )}
          </Content>
        </Overlay>
      </Portal>
    </Root>
  );
}
