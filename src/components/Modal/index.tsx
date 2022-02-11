import { useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import { MdClose } from 'react-icons/md'

import * as S from './styles'

type ModalProps = {
  isOpen: boolean
  modalTitle?: string
  onClose?: () => void
} & React.HTMLAttributes<HTMLDivElement>

export const Modal = ({
  isOpen,
  modalTitle,
  onClose,
  children
}: ModalProps): React.ReactElement => {
  const AnimatedModal = animated(S.Modal)

  const wrapperTrasition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: isOpen
  })

  const contentTransition = useTransition(isOpen, {
    from: { opacity: 0, y: 800 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 800 },
    reverse: isOpen
  })

  const overlayTrasition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: isOpen
  })

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }, [isOpen])

  return wrapperTrasition(
    (style, item) =>
      item && (
        <AnimatedModal role="modal" styles={style}>
          {contentTransition(
            (style, item) =>
              item && (
                <animated.div style={style} className="m__content">
                  <div className="mc__header">
                    {!!modalTitle && (
                      <span className="mch__title">{modalTitle}</span>
                    )}
                    <button
                      title="Fechar"
                      onClick={() => onClose?.()}
                      className="mch__close-button"
                    >
                      <MdClose size={30} />
                    </button>
                  </div>
                  {children}
                </animated.div>
              )
          )}
          {overlayTrasition(
            (style, item) =>
              item && (
                <animated.div
                  role="overlay"
                  style={style}
                  onClick={() => onClose?.()}
                  className="m__overlay"
                />
              )
          )}
        </AnimatedModal>
      )
  )
}
