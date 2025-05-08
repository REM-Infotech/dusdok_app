import { RouterView } from "vue-router";

export default {
  /**
   * Função de renderização padrão utilizada pelo RouterView.
   *
   * @param {{ Component: import("vue").Component, router: any }} props - Objeto que contém o componente atual e a instância do roteador.
   * @returns {JSX.Element|null} Retorna o componente renderizado se existir, caso contrário, retorna null.
   */
  render() {
    return (
      <>
        <RouterView>
          {{
            /**
             * Slot default do RouterView.
             *
             * @param {{ Component: import('vue').Component, router: import('vue-router').Router }}
             * @returns {JSX.Element|null}
             */
            default: ({ Component, router }) => {
              console.log(router);
              if (!Component) {
                return null;
              }
              return <Component />;
            },
          }}
        </RouterView>
      </>
    );
  },
};
