"use strict";
const textContainers = ['conv1b', 'conv2b', 'conv3b', 'conv4b'];
function type(toTypeID, toTypeString) {
    return new Promise(resolve => {
        const textContainer = document.getElementById(toTypeID);
        if (toTypeString === '') {
            toTypeString = (textContainer === null || textContainer === void 0 ? void 0 : textContainer.textContent) || '';
            if (textContainer) {
                textContainer.textContent = '';
                unhide_elem(toTypeID);
                unhide_elem(toTypeID.slice(0, -1) + 'a');
            }
        }
        if (textContainer) {
            textContainer.classList.add('cursor', 'typing');
        }
        function typeCharacter(index) {
            let typingDelay = 20;
            const c = toTypeString.charAt(index);
            if (index > 0) {
                if (toTypeString.charAt(index - 1) === '.') {
                    typingDelay *= 20;
                }
            }
            if (index < toTypeString.length) {
                setTimeout(() => {
                    if (textContainer) {
                        textContainer.textContent += c;
                    }
                    typeCharacter(index + 1);
                }, typingDelay);
            }
            else {
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
