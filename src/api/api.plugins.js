import axios from "axios";

const apiPlugin = { // сам плагин
    install(app, initOptions) {
        /* установка плагина. Плагин принимает на вход экземпляр приложения
        * и настройку baseURL для axios */
        const axiosClient = axios.create(initOptions) // создание axios с начальными свойствами


        // можно сказать шаблон вызова axios. передается параметр options, который будет содержать
        // тип запроса, основной url и params, если такоевые имеются
        const api = async (options) => {
            return axiosClient({
                ...options,
                params: {
                    ...options.params
                }
            })
        }

        app.config.globalProperties.$api = { // описание глобальных методов, к которым можно будет обращаться внутри компонентов
            getUserInfo: async () => {
                return await api({ // вызов шаблона, и передача всех необходимых свойств
                    methods: 'get',
                    url: 'get-user-info',
                    params: {
                        id: 12345
                    }
                })
            },

            setUser: async (data) => {
                return await api({
                    methods: 'get',
                    url: 'set-user',
                    data: data
                })
            }
        }
    }
}

export default apiPlugin // експорт плагина