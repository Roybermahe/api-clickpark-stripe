import { createConnection } from 'typeorm';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mariadb',
        host: '148.251.116.76',
        port: 3306,
        username: 'dba_clickpark',
        password: '74b6xUbS_vTyedei',
        database: 'db_clickpark',
        entities: ['**/**/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];

// export const databaseProvider = [
//   {
//     provide: 'DATABASE_CONNECTION',
//     useFactory: async () =>
//       await createConnection({
//         type: 'mariadb',
//         host: 'localhost',
//         port: 3306,
//         username: 'root',
//         password: '',
//         database: 'dba_parking_test',
//         entities: ['dist/database/entitys/*.entity{.ts,.js}'],
//         synchronize: true,
//       }),
//   },
// ];
