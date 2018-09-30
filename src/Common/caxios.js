import { setup } from 'axios-cache-adapter'
import localforage from 'localforage'
import memoryDriver from 'localforage-memoryStorageDriver'

class caxios {
    static cached(ttl) {
        if (!ttl) {
            ttl = 0;
        }

        const store = localforage.createInstance({
            // List of drivers used
            driver: [
                localforage.INDEXEDDB,
                localforage.LOCALSTORAGE,
                memoryDriver
            ],
            // Prefix all storage keys to prevent conflicts
            name: 'caxios-cache'
        });

        return setup({
            cache: {
                maxAge: ttl * 1000,
                store
            }
        });
    }
}

export default caxios;
