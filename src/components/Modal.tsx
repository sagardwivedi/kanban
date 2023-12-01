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
  description?: string;
  isOpen: boolean;
  children: React.ReactNode;
  onChange: (open: boolean) => void;
}

export function Modal({
  children,
  isOpen,
  onChange,
  title,
  description,
}: ModalProps) {
  return (
    <Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Portal>
        <Overlay className="fixed inset-0 grid place-items-center overflow-y-auto bg-black/50">
          <Content className="dark:bg-secondary-background_dark bg-secondary-background_light h-full max-h-full w-full rounded-md border border-neutral-700 p-[25px] drop-shadow-md focus:outline-none md:h-auto md:max-h-[85vh] md:w-[90vw] md:max-w-[450px]">
            <Title className="mb-4 text-xl font-bold">{title}</Title>
            <Description className="mb-5 text-sm leading-normal">
              {description}
            </Description>
            <div>{children}</div>
            <Close asChild>
              <button
                className="text-secondary-color absolute right-[15px] top-[25px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center hover:text-white"
                aria-label="close"
              >
                <XMarkIcon />
              </button>
            </Close>
          </Content>
        </Overlay>
      </Portal>
    </Root>
  );
}
