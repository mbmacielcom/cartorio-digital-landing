
import { Phone, Users, FileText, Shield, Cloud, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const whatsappNumber = "5521982957672";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-slate-900 shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">
              Digitalização Cartorial
            </h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#quem-somos" className="text-slate-300 hover:text-white transition-colors">
                Quem Somos
              </a>
              <a href="#servicos" className="text-slate-300 hover:text-white transition-colors">
                Serviços
              </a>
              <a href="#digitalizacao" className="text-slate-300 hover:text-white transition-colors">
                Digitalização
              </a>
            </nav>
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contato
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in">
            Serviços de Digitação <br />
            <span className="text-blue-300">para Cartórios</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto animate-fade-in">
            Soluções profissionais em digitalização documental com precisão, 
            segurança e conformidade com o Decreto 10.278
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => window.open(whatsappLink, '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
            >
              <Phone className="w-5 h-5 mr-2" />
              Solicitar Orçamento
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-slate-900 px-8 py-3"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conhecer Serviços
            </Button>
          </div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section id="quem-somos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-900 mb-4">
              Quem Somos
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Uma equipe especializada com anos de experiência em digitalização e 
              processamento de documentos cartoriais
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-blue-600">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Maurício de Brito</CardTitle>
                <p className="text-blue-600 font-semibold">Programador de Sistemas</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Com quase 18 anos de experiência, é responsável por garantir a precisão 
                  nos processos. Especialista em conversão de formatos de documentos, 
                  assegura que todos os arquivos atendam aos padrões técnicos exigidos.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-blue-600">
              <CardHeader className="text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src="/lovable-uploads/f0ccd201-b0f6-493a-934d-0ab2eb613fb5.png" 
                    alt="Wênia Cardozo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl text-slate-900">Wênia Cardozo</CardTitle>
                <p className="text-blue-600 font-semibold">Especialista em Digitalização</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Especialista em digitalização documental com foco em registros civis 
                  e imobiliários. Com 2 anos de experiência na área, possui expertise 
                  em digitação de documentos de difícil leitura.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-900 mb-4">
              Nossos Serviços
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Soluções completas em digitalização documental com foco em qualidade e segurança
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl border-0 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Documentos Diversos</h4>
                    <p className="text-blue-200 text-sm">
                      Manuscritos antigos e documentos de difícil leitura
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">100% Remoto</h4>
                    <p className="text-blue-200 text-sm">
                      Trabalho seguro e confidencial
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Conformidade CRC</h4>
                    <p className="text-blue-200 text-sm">
                      Ajustes e conversões compatíveis
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-lg leading-relaxed mb-6">
                    Nossa equipe está preparada para lidar com documentos diversos, incluindo manuscritos 
                    antigos ou de difícil leitura, sempre garantindo precisão e qualidade. Também realizamos 
                    ajustes e conversões de documentos para formatos compatíveis com o CRC.
                  </p>
                  <p className="text-blue-200">
                    O trabalho é realizado de forma 100% remota, com total segurança e confidencialidade. 
                    Estamos expandindo nossos serviços para atender outros cartórios e estamos à disposição 
                    para colaborar com sua demanda.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Digitalização Section */}
      <section id="digitalizacao" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-900 mb-4">
              O que é a Digitalização de Cartórios
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Entenda como a digitalização moderniza e protege o acervo documental
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">
                      Processo de Digitalização
                    </h4>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      A digitalização consiste em pegar todo o acervo físico do cartório, em papel, 
                      escanear as folhas de acordo com o Decreto 10.278 e indexá-los no sistema 
                      próprio fornecido pelo governo. Isso auxilia para que os serviços prestados 
                      para população possam ser feitos de forma ágil.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <Cloud className="w-16 h-16 text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-slate-50 rounded-lg">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h5 className="font-semibold text-slate-900 mb-2">Agilidade</h5>
                    <p className="text-sm text-slate-600">
                      Serviços mais rápidos para a população
                    </p>
                  </div>
                  
                  <div className="text-center p-6 bg-slate-50 rounded-lg">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-blue-600" />
                    </div>
                    <h5 className="font-semibold text-slate-900 mb-2">Segurança</h5>
                    <p className="text-sm text-slate-600">
                      Proteção contra perdas e danos
                    </p>
                  </div>
                  
                  <div className="text-center p-6 bg-slate-50 rounded-lg">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Cloud className="w-8 h-8 text-amber-600" />
                    </div>
                    <h5 className="font-semibold text-slate-900 mb-2">Backup</h5>
                    <p className="text-sm text-slate-600">
                      Armazenamento seguro em nuvem
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    A quantidade de documentos que circulam em cartórios é gigantesca. A digitalização 
                    chega como uma solução moderna e acessível, ganhando cada vez mais espaço por 
                    otimizar as atividades e os resultados entregues por essas repartições.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    A realização de procedimentos tão importantes em papel gera uma quantidade enorme 
                    de folhas manuseadas, o que além de causar danos ao meio ambiente, coloca em risco 
                    as informações contidas. No caso de incêndio ou alagamento, por exemplo, documentos 
                    se perderiam, o que não acontece se a documentação estiver salva em nuvem, com backup. 
                    Portanto, a digitalização de cartórios é também uma forma de garantir a proteção 
                    para o cidadão que tem seus dados resguardados a partir de segurança digital avançada.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Pronto para Modernizar seu Cartório?
          </h3>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar na digitalização 
            do seu acervo documental
          </p>
          <Button 
            size="lg"
            onClick={() => window.open(whatsappLink, '_blank')}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Entrar em Contato
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2024 Digitalização Cartorial. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => window.open(whatsappLink, '_blank')}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          size="lg"
        >
          <Phone className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
