// interface czResult {
//   message: Event,
//   success: boolean
// }
//
// class IndexedDB {
//   private db: IDBDatabase | null
//
//   constructor (name: string, version: number) {
//     const request = indexedDB.open(name, version ?? 1)
//     this.db = null
//
//     request.onerror = (e) => {
//       throw new Error(e.type)
//     }
//
//     request.onsuccess = (e) => {
//       const db: IDBDatabase = e.target.result
//       this.db = db
//     }
//
//     request.onupgradeneeded = (e) => {
//       const db: IDBDatabase = e.target.result
//
//       const store = db.createObjectStore('message', {
//         keyPath: 'id'
//       })
//
//       store.createIndex('poster', 'poster', {
//         unique: false
//       })
//       store.createIndex('avatar', 'avatar', {
//         unique: true
//       })
//       store.createIndex('message', 'message', {
//         unique: false
//       })
//
//       this.db = db
//     }
//   }
//
//   public addData (data: object) {
//     if (!this.db) return
//
//     const request = this.db
//       .transaction('message', 'readwrite')
//       .objectStore('message')
//       .add(data)
//
//     request.onerror = (e) => {
//       return {
//         event: e,
//         success: false
//       }
//     }
//
//     request.onsuccess = (e) => {
//       return {
//         event: e,
//         success: true
//       }
//     }
//   }
// }
//
// const db = new IndexedDB('message', 1)
//
// export default db
