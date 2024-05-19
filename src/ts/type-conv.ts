const textContainers: string[] = ['conv1b', 'conv2b', 'conv3b', 'conv4b'];

function type(toTypeID: string, toTypeString: string): Promise<void> {
    return new Promise(resolve => {
        const textContainer: HTMLElement | null = document.getElementById(toTypeID);
        if (toTypeString === '') {
            toTypeString = textContainer?.textContent || '';
            if (textContainer) {
                textContainer.textContent = '';
                unhide_elem(toTypeID);
                unhide_elem(toTypeID.slice(0, -1) + 'a');
            }
        }
        if (textContainer) {
            textContainer.classList.add('cursor', 'typing');
        }
        function typeCharacter(index: number) {
            let typingDelay = 25;
            const c: string = toTypeString.charAt(index);
            if (c === '.') {
                typingDelay *= 8
            }
            console.log(typingDelay);
            if (index < toTypeString.length) {
                setTimeout(() => {
                    if (textContainer) {
                        textContainer.textContent += c;
                    }
                    typeCharacter(index + 1);
                }, typingDelay);
            } else {
                if (textContainer) {
                    textContainer.classList.remove('typing');
                    if (!['conv4b'].includes(toTypeID)) {
                        textContainer.classList.remove('cursor');
                    }
                }
                resolve();
            }
        }
        if (textContainer) {
            typeCharacter(0);
        }
    });
}