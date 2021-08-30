import React, { FC } from 'react'
import { Layout, PageBlock, Table } from 'vtex.styleguide'
import { useQuery } from 'react-apollo'

import leads from './graphql/leads.gql'

const adminExample: FC = () => {
  const { data, loading } = useQuery(leads)

  if (loading) return (
    <Layout>
      <PageBlock>
        <h3>Carregando...</h3>
      </PageBlock>
    </Layout>
  )

  const itemsCopy = data.leads

  const defaultSchema = {
    properties: {
      name: {
        title: 'Nome',
        minWidth: 200,
      },
      email: {
        title: 'E-mail',
        minWidth: 300,
      },
      phone: {
        title: 'Telefone',
        // default is 200px
        minWidth: 200,
      },
      type: {
        title: 'Tipo',
        // default is 200px
        minWidth: 80,
      },
      dataProspecto: {
        title: 'Prospecto Desde',
        // default is 200px
        minWidth: 200,
      },
      dataCliente: {
        title: 'Cliente Desde',
        // default is 200px
        minWidth: 200,
      },
    },
  }

  return (
    <Layout>
      <PageBlock
        title="Leads"
        subtitle="Lista de Clientes e Prospectos"
        variation="full"
      >
        <div className="mb5">
          <Table
            fullWidth
            schema={defaultSchema}
            items={itemsCopy}
            density="medium"
          />
        </div>
      </PageBlock>
    </Layout>
  )
}

export default adminExample
