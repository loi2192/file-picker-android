'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const FilePicker = core.registerPlugin('FilePicker', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.FilePickerWeb()),
});

class FilePickerWeb extends core.WebPlugin {
    constructor() {
        super();
    }
    
    async pickFiles(options) {
        return this.openFilePicker(options);
    }
    
    async pickImages(options) {
        return this.openFilePicker({ ...options, types: ['image/*'] });
    }
    
    async pickMedia(options) {
        return this.openFilePicker({ ...options, types: ['image/*', 'video/*'] });
    }
    
    async pickVideos(options) {
        return this.openFilePicker({ ...options, types: ['video/*'] });
    }
    
    async openFilePicker(options = {}) {
        return new Promise((resolve, reject) => {
            const input = document.createElement('input');
            input.type = 'file';
            input.multiple = options.multiple || false;
            
            if (options.types) {
                input.accept = options.types.join(',');
            }

            input.onchange = async () => {
                const files = Array.from(input.files || []);
                const pickedFiles = await Promise.all(
                    files.map(async (file) => {
                        const pickedFile = {
                            name: file.name,
                            size: file.size,
                            mimeType: file.type,
                            modifiedAt: file.lastModified,
                            blob: file,
                        };

                        if (options.readData) {
                            const reader = new FileReader();
                            pickedFile.data = await new Promise((resolve) => {
                                reader.onload = () => resolve(reader.result?.toString().split(',')[1]);
                                reader.readAsDataURL(file);
                            });
                        }

                        return pickedFile;
                    })
                );

                resolve({ files: pickedFiles });
            };

            input.oncancel = () => reject(new Error('User cancelled file picker'));
            input.click();
        });
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FilePickerWeb: FilePickerWeb
});

exports.FilePicker = FilePicker; 