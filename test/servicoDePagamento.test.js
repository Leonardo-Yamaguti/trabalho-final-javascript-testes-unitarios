import assert from 'node:assert';
import { ServicoDePagamento } from '../src/servicoDePagamento.js';

describe('ServicoDePagamento', () => {

    it('Deve registrar pagamento com categoria cara quando valor for maior que 100', () => {

        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.strictEqual(ultimoPagamento.categoria, 'cara');
    });

    it('Deve registrar pagamento com categoria padrão quando valor for menor ou igual a 100', () => {

        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('1234-5678-9999', 'CPFL', 80.00);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.strictEqual(ultimoPagamento.categoria, 'padrão');
    });

    it('Deve consultar o último pagamento realizado', () => {

        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        servicoDePagamento.pagar('1111', 'Empresa A', 50);
        servicoDePagamento.pagar('2222', 'Empresa B', 200);

        // Act
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.deepStrictEqual(ultimoPagamento, {
            codigoBarras: '2222',
            empresa: 'Empresa B',
            valor: 200,
            categoria: 'cara'
        });
    });

    it('Deve retornar undefined quando não houver pagamentos', () => {

        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.strictEqual(ultimoPagamento, undefined);
    });
});
