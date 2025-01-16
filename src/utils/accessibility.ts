function findElementAncestor(element: HTMLElement, selector: string) {
  let _element: HTMLElement | null = element;
  while ((_element = _element.parentElement) && !_element.matches(selector)) {}
  return _element;
}
function getPreviousIndex(current: number, elements: HTMLButtonElement[]) {
  for (let i = current - 1; i >= 0; i -= 1) {
    if (!elements[i].disabled) {
      return i;
    }
  }

  for (let i = elements.length - 1; i > -1; i -= 1) {
    if (!elements[i].disabled) {
      return i;
    }
  }

  return current;
}

function getNextIndex(current: number, elements: HTMLButtonElement[]) {
  for (let i = current + 1; i < elements.length; i += 1) {
    if (!elements[i].disabled) {
      return i;
    }
  }

  for (let i = 0; i < elements.length; i += 1) {
    if (!elements[i].disabled) {
      return i;
    }
  }

  return current;
}

/** Validates that target element is on the same level as sibling, used to filter out children that have the same sibling selector */
function onSameLevel(
  target: HTMLButtonElement,
  sibling: HTMLButtonElement,
  parentSelector: string
) {
  return (
    findElementAncestor(target, parentSelector) ===
    findElementAncestor(sibling, parentSelector)
  );
}

interface GetElementsSiblingsInput {
  parentSelector: string;
  siblingSelector: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

export function createScopedKeydownHandler({
  parentSelector,
  siblingSelector,
  onKeyDown,
}: GetElementsSiblingsInput) {
  return (event: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(event);

    const elements = Array.from(
      findElementAncestor(
        event.currentTarget,
        parentSelector
      )?.querySelectorAll<HTMLButtonElement>(siblingSelector) || []
    ).filter((node) => onSameLevel(event.currentTarget, node, parentSelector));

    const current = elements.findIndex((el) => event.currentTarget === el);
    const _nextIndex = getNextIndex(current, elements);
    const _previousIndex = getPreviousIndex(current, elements);
    const nextIndex = _nextIndex;
    const previousIndex = _previousIndex;

    switch (event.key) {
      case "ArrowRight": {
        event.stopPropagation();
        event.preventDefault();
        elements[nextIndex].focus();

        break;
      }

      case "ArrowLeft": {
        event.stopPropagation();
        event.preventDefault();
        elements[previousIndex].focus();

        break;
      }

      case "Home": {
        event.stopPropagation();
        event.preventDefault();
        !elements[0].disabled && elements[0].focus();
        break;
      }

      case "End": {
        event.stopPropagation();
        event.preventDefault();
        const last = elements.length - 1;
        !elements[last].disabled && elements[last].focus();
        break;
      }
    }
  };
}
