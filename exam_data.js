// ACP 题库数据 - 自动生成（含课程原题）
const QUESTION_BANK = {
  "metadata": {
    "title": "阿里云大模型 ACP 认证考试题库",
    "description": "基于阿里云大模型 ACP 认证教程和考试大纲 V3 生成的练习题库（含课程原题）",
    "version": "1.0",
    "total_questions": 144,
    "exam_info": {
      "passing_score": 80,
      "full_score": 100,
      "duration_minutes": 120,
      "single_choice": "50题，每题1分",
      "multiple_choice": "25题，每题2分"
    },
    "modules": {
      "大模型应用开发": "17%",
      "大模型提示词工程": "15%",
      "大模型检索增强": "20%",
      "大模型微调": "16%",
      "多Agent及多模态应用": "16%",
      "生产环境应用实践": "16%"
    },
    "question_types": {
      "single": "单选题",
      "multiple": "多选题",
      "true_false": "判断题"
    }
  },
  "statistics": {
    "total": 144,
    "single_choice": 87,
    "multiple_choice": 30,
    "true_false": 27,
    "course_questions": 44,
    "by_module": {
      "大模型应用开发": {
        "total": 22,
        "single": 14,
        "multiple": 4,
        "true_false": 4
      },
      "大模型提示词工程": {
        "total": 17,
        "single": 9,
        "multiple": 5,
        "true_false": 3
      },
      "大模型检索增强": {
        "total": 34,
        "single": 22,
        "multiple": 7,
        "true_false": 5
      },
      "大模型微调": {
        "total": 20,
        "single": 12,
        "multiple": 4,
        "true_false": 4
      },
      "多Agent及多模态应用": {
        "total": 22,
        "single": 13,
        "multiple": 4,
        "true_false": 5
      },
      "生产环境应用实践": {
        "total": 29,
        "single": 17,
        "multiple": 6,
        "true_false": 6
      }
    }
  },
  "questions": [
    {
      "id": "Q001",
      "module": "大模型应用开发",
      "type": "single",
      "question": "在使用 OpenAI 兼容接口调用阿里云 DashScope 大模型时，base_url 应设置为以下哪个地址？",
      "options": {
        "A": "https://api.openai.com/v1",
        "B": "https://dashscope.aliyuncs.com/compatible-mode/v1",
        "C": "https://bailian.console.aliyun.com/api/v1",
        "D": "https://chat.qwen.ai/v1"
      },
      "answer": "B",
      "explanation": "阿里云 DashScope 提供与 OpenAI SDK 兼容的 API 接口，其 base_url 为 https://dashscope.aliyuncs.com/compatible-mode/v1，可以使用标准的 OpenAI SDK 进行调用。"
    },
    {
      "id": "Q002",
      "module": "大模型应用开发",
      "type": "single",
      "question": "关于 temperature 参数，以下说法正确的是？",
      "options": {
        "A": "temperature 值越高，输出越确定和稳定",
        "B": "temperature 的取值范围是 [0, 1]",
        "C": "temperature 值越低，概率分布越尖锐，输出越确定",
        "D": "temperature 默认值为 1.0"
      },
      "answer": "C",
      "explanation": "temperature 调节 softmax 概率分布的尖锐程度，取值范围 [0, 2)，默认 0.7（Qwen-Max）。值越低概率越集中于高概率 Token，输出越确定（适合代码生成）；值越高概率分布越平坦，输出越多样（适合创意文案）。"
    },
    {
      "id": "Q003",
      "module": "大模型应用开发",
      "type": "single",
      "question": "top_p 参数的作用是什么？",
      "options": {
        "A": "只保留概率最高的 p 个 Token",
        "B": "按概率降序排序，选取累计概率达到阈值的 Token 子集进行采样",
        "C": "限制模型输出的最大 Token 数量",
        "D": "控制模型的温度参数"
      },
      "answer": "B",
      "explanation": "top_p（Nucleus Sampling）按概率降序排序，选取累计概率达到阈值的 Token 子集进行采样。取值范围 (0, 1]，默认 0.8。值越小候选范围越窄输出越稳定，值越大候选范围越广内容越多样。"
    },
    {
      "id": "Q004",
      "module": "大模型应用开发",
      "type": "single",
      "question": "在 OpenAI 兼容接口中，messages 参数中设置大模型角色和任务的是哪个角色？",
      "options": {
        "A": "user",
        "B": "assistant",
        "C": "system",
        "D": "developer"
      },
      "answer": "C",
      "explanation": "在 messages 参数结构中，system 角色用于设置大模型的角色和任务，user 角色是用户问题，assistant 角色是模型回复。system 消息影响模型的输出风格和行为规范。"
    },
    {
      "id": "Q005",
      "module": "大模型应用开发",
      "type": "single",
      "question": "实现流式输出需要设置哪个参数？",
      "options": {
        "A": "stream=True",
        "B": "streaming=True",
        "C": "flow=True",
        "D": "realtime=True"
      },
      "answer": "A",
      "explanation": "设置 stream=True 可以启用流式输出，通过迭代 chunk.choices[0].delta.content 逐 token 输出，实现类似打字机效果，减少用户感知延迟。"
    },
    {
      "id": "Q006",
      "module": "大模型应用开发",
      "type": "multiple",
      "question": "以下关于大模型文本生成工作流程的描述，正确的有哪些？",
      "options": {
        "A": "文本分词（Tokenization）是将文本转为 Token ID 序列的过程",
        "B": "Token 向量化通过 Embedding 矩阵将 ID 查表为向量",
        "C": "大模型推理使用的是编码器（Encoder）结构",
        "D": "自回归生成是将新 Token 追加到输入序列重复推理的过程"
      },
      "answer": [
        "A",
        "B",
        "D"
      ],
      "explanation": "大模型文本生成工作流程五阶段为：文本分词→Token 向量化→大模型推理→解码与自回归→输出文本。大模型推理使用的是 Decoder Block（因果自注意力+前馈网络），而非编码器结构。"
    },
    {
      "id": "Q007",
      "module": "大模型应用开发",
      "type": "multiple",
      "question": "关于大模型 API 参数，以下说法正确的有哪些？",
      "options": {
        "A": "建议同时调整 temperature 和 top_p 以获得最佳效果",
        "B": "seed 参数传入相同值可以尽量返回相同结果",
        "C": "top_k 参数只保留概率最高的 k 个 Token",
        "D": "随机性无法完全消除，因为分布式系统等因素会引入微小随机性"
      },
      "answer": [
        "B",
        "C",
        "D"
      ],
      "explanation": "重要建议是不要同时调整 temperature 和 top_p，可能导致输出不可预测。seed 参数传入相同值尽量返回相同结果但不保证完全一致。top_k 只保留概率最高的 k 个 Token。分布式系统等会引入微小随机性。"
    },
    {
      "id": "Q008",
      "module": "大模型应用开发",
      "type": "true_false",
      "question": "上下文窗口（Context Window）是大模型接收输入的地方，容量有限，可以类比为计算机的 RAM。",
      "answer": true,
      "explanation": "上下文窗口是大模型接收输入的区域，容量有限，教程中将其类比为 RAM。上下文工程的核心理念就是在正确时间将最相关、最精准的知识动态加载到有限的上下文窗口中。"
    },
    {
      "id": "Q009",
      "module": "大模型应用开发",
      "type": "true_false",
      "question": "推理模型（如 Qwen3）会先输出思考过程（reasoning_content），再输出回答内容。",
      "answer": true,
      "explanation": "推理模型的特点是输出包含完整推导步骤（思考过程），先输出 reasoning_content，再输出回答内容。推理模型适合数学解题、代码编写、法律分析等需要深度思考的场景。"
    },
    {
      "id": "Q010",
      "module": "大模型应用开发",
      "type": "true_false",
      "question": "实现多轮对话时，只需将当前用户的问题发送给大模型即可，无需携带历史对话记录。",
      "answer": false,
      "explanation": "实现多轮对话需要维护 conversation_history 列表，将历史对话全部传入 messages。大模型是无状态的，每次调用独立，必须携带完整对话历史才能保持上下文连贯。"
    },
    {
      "id": "Q011",
      "module": "大模型应用开发",
      "type": "single",
      "question": "以下哪项不属于上下文工程的四大核心技术？",
      "options": {
        "A": "RAG（检索增强生成）",
        "B": "Prompt（提示词工程）",
        "C": "Fine-tuning（微调）",
        "D": "Memory（记忆机制）"
      },
      "answer": "C",
      "explanation": "上下文工程的四大核心技术是：RAG、Prompt、Tool（工具使用）、Memory。微调不属于上下文工程的范畴，它是模型层面的优化。"
    },
    {
      "id": "Q012",
      "module": "大模型应用开发",
      "type": "single",
      "question": "enable_search 参数的作用是什么？",
      "options": {
        "A": "启用向量数据库搜索",
        "B": "让大模型利用互联网搜索结果丰富回复",
        "C": "启用 RAG 检索功能",
        "D": "控制搜索引擎的爬取范围"
      },
      "answer": "B",
      "explanation": "enable_search 参数让大模型利用互联网搜索结果丰富回复内容，属于大模型自带的知识扩展能力，与 RAG 的向量检索不同。"
    },
    {
      "id": "Q013",
      "module": "大模型应用开发",
      "type": "multiple",
      "question": "以下哪些是大模型解码与自回归阶段常用的解码策略？",
      "options": {
        "A": "贪心解码（Greedy）",
        "B": "Beam Search",
        "C": "Top-p（Nucleus Sampling）",
        "D": "Top-k Sampling"
      },
      "answer": [
        "A",
        "B",
        "C",
        "D"
      ],
      "explanation": "大模型常用的解码策略包括：贪心解码（每步选概率最高的 Token）、Beam Search（维护多个候选序列）、Top-p（累计概率采样）、Top-k Sampling（只保留概率最高的 k 个 Token）。"
    },
    {
      "id": "Q014",
      "module": "大模型应用开发",
      "type": "true_false",
      "question": "自回归生成过程中，当遇到 EOS Token（终止符）时，模型会停止生成。",
      "answer": true,
      "explanation": "自回归生成的停止条件包括：遇到 EOS Token（终止符）、达到最大长度限制、遇到停用词。EOS Token 是标记生成结束的特殊 Token。"
    },
    {
      "id": "Q015",
      "module": "大模型应用开发",
      "type": "single",
      "question": "以下关于 seed 参数的描述，正确的是？",
      "options": {
        "A": "seed 参数可以保证输出完全一致",
        "B": "seed 参数传入相同值尽量返回相同结果，但不保证完全一致",
        "C": "seed 参数只对 temperature=0 时有效",
        "D": "seed 参数的取值范围是 [0, 100]"
      },
      "answer": "B",
      "explanation": "seed 参数传入相同值尽量返回相同结果，但不保证完全一致。因为分布式系统、模型输出优化等因素会引入微小的随机性。"
    },
    {
      "id": "Q016",
      "module": "大模型提示词工程",
      "type": "single",
      "question": "提示词框架的六要素不包括以下哪项？",
      "options": {
        "A": "任务目标（Object）",
        "B": "角色（Role）",
        "C": "学习率（Learning Rate）",
        "D": "输出格式（Output Format）"
      },
      "answer": "C",
      "explanation": "提示词框架六要素为：任务目标、上下文、角色、受众、样例、输出格式。学习率是模型训练参数，不属于提示词框架。"
    },
    {
      "id": "Q017",
      "module": "大模型提示词工程",
      "type": "single",
      "question": "以下哪种提示词技巧可以让模型输出中间推理步骤，提升复杂任务的准确率？",
      "options": {
        "A": "少样本示例（Few-shot）",
        "B": "思维链（Chain of Thought, COT）",
        "C": "分隔符使用",
        "D": "角色限定"
      },
      "answer": "B",
      "explanation": "思维链（COT）让模型一步步思考，输出中间推理步骤，可以提升数学计算等复杂任务的准确率。COT 的扩展还包括思维树（ToT）和思维图（GoT）。"
    },
    {
      "id": "Q018",
      "module": "大模型提示词工程",
      "type": "single",
      "question": "Meta Prompting 的核心思想是什么？",
      "options": {
        "A": "手动编写大量提示词模板",
        "B": "让大模型扮演提示词评审专家分析并优化提示词",
        "C": "使用元数据标注提示词",
        "D": "通过搜索引擎优化提示词"
      },
      "answer": "B",
      "explanation": "Meta Prompting 的核心思想是让大模型扮演提示词评审专家，通过多轮迭代流程（设定参考答案→生成回答→差距分析→重写提示词→重复）自动优化提示词质量。"
    },
    {
      "id": "Q019",
      "module": "大模型提示词工程",
      "type": "single",
      "question": "关于推理大模型的提示词技巧，以下说法错误的是？",
      "options": {
        "A": "保持提示简洁清晰，提供足够背景信息",
        "B": "应使用思维链提示来增强推理模型的思考能力",
        "C": "可以根据模型响应调整提示词",
        "D": "可以让推理模型充当提示词教练"
      },
      "answer": "B",
      "explanation": "推理模型自带深度思考能力，应避免使用思维链提示。推理模型的提示词技巧包括：保持简洁清晰、避免 COT 提示、根据响应调整提示词、让推理模型充当提示词教练。"
    },
    {
      "id": "Q020",
      "module": "大模型提示词工程",
      "type": "multiple",
      "question": "以下哪些是常用的提示词分隔符？",
      "options": {
        "A": "【】",
        "B": "###",
        "C": "<< >>",
        "D": "XML 标签"
      },
      "answer": [
        "A",
        "B",
        "C",
        "D"
      ],
      "explanation": "常用的提示词分隔符包括：【】、<< >>、###、===、---、XML 标签等。选择分隔符时应避免与提示词中已有的符号冲突。"
    },
    {
      "id": "Q021",
      "module": "大模型提示词工程",
      "type": "multiple",
      "question": "关于少样本示例（Few-shot），以下说法正确的有哪些？",
      "options": {
        "A": "提供样例让大模型模仿风格和结构",
        "B": "比仅规定格式更稳定一致",
        "C": "少样本示例就是给模型大量的训练数据",
        "D": "可以引导模型输出特定格式"
      },
      "answer": [
        "A",
        "B",
        "D"
      ],
      "explanation": "少样本示例是在提示词中提供少量参考案例，让大模型模仿风格和结构。比仅规定格式更稳定一致，可引导输出特定格式。不是给模型大量训练数据。"
    },
    {
      "id": "Q022",
      "module": "大模型提示词工程",
      "type": "true_false",
      "question": "系统角色提示词（system 消息）的作用是设置大模型的角色和任务，可以影响输出的风格和内容。",
      "answer": true,
      "explanation": "system 消息用于设置大模型的角色和任务，是提示词工程的重要组成部分。不同的系统角色设定会产生不同风格和深度的回答。"
    },
    {
      "id": "Q023",
      "module": "大模型提示词工程",
      "type": "true_false",
      "question": "AI 裁判（AI Judge）的训练过程中需要监控训练准确率和评估准确率，以检测过拟合。",
      "answer": true,
      "explanation": "AI 裁判的训练流程类似机器学习分类器训练：准备标注样本→拆分训练/评估集→预测→找错题→Meta Prompting 优化→监控训练准确率和评估准确率（检测过拟合）。"
    },
    {
      "id": "Q024",
      "module": "大模型提示词工程",
      "type": "true_false",
      "question": "推理模型和通用模型的混合使用策略是：推理模型做执行，通用模型做规划/决策。",
      "answer": false,
      "explanation": "正确的混合使用策略是：推理模型做规划/决策（利用其深度思考能力），通用模型做执行（利用其快速响应能力）。"
    },
    {
      "id": "Q025",
      "module": "大模型提示词工程",
      "type": "single",
      "question": "在 LlamaIndex 中，自定义 RAG 提示词模板时使用的变量包括？",
      "options": {
        "A": "{question} 和 {answer}",
        "B": "{context_str} 和 {query_str}",
        "C": "{input} 和 {output}",
        "D": "{prompt} 和 {response}"
      },
      "answer": "B",
      "explanation": "LlamaIndex 的提示词模板使用 {context_str}（检索到的上下文）和 {query_str}（用户问题）两个变量。"
    },
    {
      "id": "Q026",
      "module": "大模型提示词工程",
      "type": "multiple",
      "question": "结构化输出的引导-校验-重试闭环包括哪些步骤？",
      "options": {
        "A": "定义结构：用 JSON Schema 或 Pydantic 定义数据模型",
        "B": "构建提示词：指令 + Schema 定义 + 输出范例",
        "C": "校验与重试：用 Pydantic ValidationError 校验，失败则反馈给模型重新生成",
        "D": "手动标注：人工审核每条输出"
      },
      "answer": [
        "A",
        "B",
        "C"
      ],
      "explanation": "结构化输出的闭环包括三步：定义结构、构建提示词、校验与重试。不需要手动标注每条输出。"
    },
    {
      "id": "Q027",
      "module": "大模型提示词工程",
      "type": "single",
      "question": "基于大模型的意图识别中，为了获得确定性输出，应将 temperature 设置为？",
      "options": {
        "A": "0.0",
        "B": "0.5",
        "C": "0.7",
        "D": "1.0"
      },
      "answer": "A",
      "explanation": "将 temperature 设置为 0.0 可以获得确定性输出，减少随机性，确保对相同输入产生一致的工具调用决策。"
    },
    {
      "id": "Q028",
      "module": "大模型检索增强",
      "type": "single",
      "question": "RAG 建立索引阶段的正确流程是？",
      "options": {
        "A": "文本向量化 → 文档解析 → 存储索引 → 文本分段",
        "B": "文档解析 → 文本分段 → 文本向量化 → 存储索引",
        "C": "文档解析 → 文本向量化 → 文本分段 → 存储索引",
        "D": "文本分段 → 文档解析 → 存储索引 → 文本向量化"
      },
      "answer": "B",
      "explanation": "RAG 建立索引阶段：文档解析→文本分段→文本向量化→存储索引。"
    },
    {
      "id": "Q029",
      "module": "大模型检索增强",
      "type": "single",
      "question": "HyDE（假设文档嵌入）的核心思路是什么？",
      "options": {
        "A": "直接用用户问题进行向量检索",
        "B": "先让大模型生成假想答案文档，再用假想文档检索真实文档",
        "C": "将问题分解为多个子问题分别检索",
        "D": "用搜索引擎代替向量检索"
      },
      "answer": "B",
      "explanation": "HyDE 先让大模型生成假想答案文档，然后用假想文档去检索真实文档，因为答案文档与知识库文档在语义空间上更接近。"
    },
    {
      "id": "Q030",
      "module": "大模型检索增强",
      "type": "single",
      "question": "RAGAS 指标中，Answer Correctness 的计算公式是？",
      "options": {
        "A": "0.5 x 语义相似度 + 0.5 x 事实准确度",
        "B": "0.25 x 语义相似度 + 0.75 x 事实准确度",
        "C": "0.75 x 语义相似度 + 0.25 x 事实准确度",
        "D": "1.0 x 事实准确度"
      },
      "answer": "B",
      "explanation": "Answer Correctness = 0.25 x 语义相似度 + 0.75 x 事实准确度。事实准确度通过 F1 = TP/(TP+0.5x(FP+FN)) 计算。"
    },
    {
      "id": "Q031",
      "module": "大模型检索增强",
      "type": "single",
      "question": "当 Context Recall 指标较低时，说明问题出在哪个阶段？",
      "options": {
        "A": "生成阶段",
        "B": "检索阶段",
        "C": "文档解析阶段",
        "D": "评测阶段"
      },
      "answer": "B",
      "explanation": "Context Recall 衡量 ground_truth 中多少比例的观点能被 contexts 支持。该指标低说明检索阶段未能召回足够的相关信息。"
    },
    {
      "id": "Q032",
      "module": "大模型检索增强",
      "type": "single",
      "question": "Lost in the Middle 现象指的是什么？",
      "options": {
        "A": "模型在处理长文本时速度变慢",
        "B": "关键信息被埋藏在大量无关信息中，大模型视而不见",
        "C": "检索结果在向量空间中的位置太靠中间",
        "D": "文档切片时中间部分容易丢失"
      },
      "answer": "B",
      "explanation": "Lost in the Middle 指关键信息被埋藏在大量无关信息中被模型忽略。模型存在首因效应和近因效应，但对中间段落信息容易忽略。"
    },
    {
      "id": "Q033",
      "module": "大模型检索增强",
      "type": "single",
      "question": "Rerank（重排序）的正确操作流程是？",
      "options": {
        "A": "先精排再大量召回",
        "B": "先大量召回，再用重排序模型精排，筛选最相关的 top_n 条",
        "C": "只使用重排序模型进行检索",
        "D": "先过滤再召回最后重排序"
      },
      "answer": "B",
      "explanation": "Rerank 先大量召回（如 similarity_top_k=20），再用重排序模型精排，最后筛选最相关的 top_n 条（如 top_n=3）。"
    },
    {
      "id": "Q034",
      "module": "大模型检索增强",
      "type": "multiple",
      "question": "以下哪些是 RAG 检索前优化策略？",
      "options": {
        "A": "问题改写",
        "B": "HyDE（假设文档嵌入）",
        "C": "Rerank（重排序）",
        "D": "提取标签过滤"
      },
      "answer": [
        "A",
        "B",
        "D"
      ],
      "explanation": "检索前优化策略包括：问题改写、问题扩写、HyDE、提取标签过滤等。Rerank 属于检索后优化策略。"
    },
    {
      "id": "Q035",
      "module": "大模型检索增强",
      "type": "multiple",
      "question": "关于 RAG 文本切片方法，以下说法正确的有哪些？",
      "options": {
        "A": "SentenceSplitter 是 LlamaIndex 的默认切片方法",
        "B": "TokenTextSplitter 按 Token 数量固定切分",
        "C": "SemanticSplitterNodeParser 根据语义相关性自适应切分",
        "D": "所有切片方法都不需要设置 chunk_size 参数"
      },
      "answer": [
        "A",
        "B",
        "C"
      ],
      "explanation": "SentenceSplitter 是默认方法；TokenTextSplitter 按 Token 固定切分；SemanticSplitterNodeParser 根据语义切分。不同方法有各自的参数需求。"
    },
    {
      "id": "Q036",
      "module": "大模型检索增强",
      "type": "multiple",
      "question": "RAGAS 指标体系中，属于召回环节的指标有哪些？",
      "options": {
        "A": "Context Precision",
        "B": "Context Recall",
        "C": "Faithfulness",
        "D": "Answer Relevancy"
      },
      "answer": [
        "A",
        "B"
      ],
      "explanation": "召回环节指标：Context Precision 和 Context Recall。Faithfulness 和 Answer Relevancy 属于生成环节。"
    },
    {
      "id": "Q037",
      "module": "大模型检索增强",
      "type": "true_false",
      "question": "Faithfulness 指标用于检测大模型的幻觉（Hallucination），衡量答案与检索上下文的事实一致性。",
      "answer": true,
      "explanation": "Faithfulness 衡量答案与检索上下文的事实一致性，是检测幻觉的重要指标。如果答案包含检索上下文中没有的信息，Faithfulness 会降低。"
    },
    {
      "id": "Q038",
      "module": "大模型检索增强",
      "type": "true_false",
      "question": "在 RAG 多轮对话中，可以直接用用户当前问题进行检索，无需考虑对话历史上下文。",
      "answer": false,
      "explanation": "RAG 多轮对话中用户问题可能依赖对话历史上下文，需要通过问题改写将上下文信息融入。LlamaIndex 中使用 CondenseQuestionChatEngine 实现。"
    },
    {
      "id": "Q039",
      "module": "大模型检索增强",
      "type": "true_false",
      "question": "Context Precision 指标衡量的是检索到的上下文中与问题相关部分的占比（信噪比）。",
      "answer": true,
      "explanation": "Context Precision 衡量相关 context 是否排名靠前、占比高（信噪比）。该指标低说明检索结果中包含过多无关信息。"
    },
    {
      "id": "Q040",
      "module": "大模型检索增强",
      "type": "single",
      "question": "以下哪个 RAG 评测框架引入了单元测试和 TDD 思想，支持 CI/CD？",
      "options": {
        "A": "Ragas",
        "B": "TruLens",
        "C": "DeepEval",
        "D": "LangChain"
      },
      "answer": "C",
      "explanation": "DeepEval 引入了单元测试和 TDD 思想，支持 CI/CD 集成。Ragas 让大模型评估 RAG 系统；TruLens 专注可观测性。"
    },
    {
      "id": "Q041",
      "module": "大模型检索增强",
      "type": "single",
      "question": "句子窗口检索使用的 LlamaIndex 组件是？",
      "options": {
        "A": "TokenTextSplitter",
        "B": "SentenceWindowNodeParser",
        "C": "SemanticSplitterNodeParser",
        "D": "MarkdownNodeParser"
      },
      "answer": "B",
      "explanation": "句子窗口检索使用 SentenceWindowNodeParser，每个切片包含周围句子作为上下文窗口。"
    },
    {
      "id": "Q042",
      "module": "大模型检索增强",
      "type": "multiple",
      "question": "当 Answer Correctness 指标较低（但 Context Recall 和 Precision 较高）时，可从哪些方面优化？",
      "options": {
        "A": "优化提示词模板",
        "B": "调整 temperature 参数",
        "C": "更换更强大的大模型",
        "D": "增加 similarity_top_k 值"
      },
      "answer": [
        "A",
        "B",
        "C"
      ],
      "explanation": "检索已到位但生成质量不够时，优化方向：优化提示词、调整 temperature、更换更强模型、微调。增加 similarity_top_k 是检索阶段优化，在此场景下不需要。"
    },
    {
      "id": "Q043",
      "module": "大模型检索增强",
      "type": "true_false",
      "question": "Embedding 模型通过对比学习训练，让相关文本的向量相似度高，不相关文本的向量相似度低。",
      "answer": true,
      "explanation": "Embedding 模型通过对比学习训练，使语义相关的文本在向量空间中距离较近，不相关的距离较远。检索时通过余弦相似度找到最相关文档。"
    },
    {
      "id": "Q044",
      "module": "大模型微调",
      "type": "single",
      "question": "LoRA（Low-Rank Adaptation）的核心原理是？",
      "options": {
        "A": "修改原始模型的全部权重参数",
        "B": "在原始权重旁挂一对低秩矩阵学习变化量，不修改原始权重",
        "C": "通过剪枝减少模型参数量",
        "D": "通过量化降低模型精度"
      },
      "answer": "B",
      "explanation": "LoRA 不修改原始权重，在旁边挂低秩矩阵 A（d x r）和 B（r x d）学习变化量，r 远小于 d。当 d=4096, r=8 时，参数量减少到 0.4%，保留 97% 以上基础能力。"
    },
    {
      "id": "Q045",
      "module": "大模型微调",
      "type": "single",
      "question": "蒸馏与微调的本质区别是什么？",
      "options": {
        "A": "蒸馏使用不同的训练算法",
        "B": "蒸馏的训练数据由教师模型生成，微调由人工标注",
        "C": "蒸馏只能用于小模型，微调只能用于大模型",
        "D": "蒸馏不需要训练过程"
      },
      "answer": "B",
      "explanation": "蒸馏与微调训练流程几乎相同（都是 SFT），区别在于数据来源：微调用人工标注（成本高），蒸馏用教师模型生成（成本低，可大规模）。"
    },
    {
      "id": "Q046",
      "module": "大模型微调",
      "type": "single",
      "question": "以下哪种情况说明模型出现了过拟合？",
      "options": {
        "A": "训练损失不下降，验证损失不下降",
        "B": "训练损失下降，验证损失下降",
        "C": "训练损失下降，验证损失先降后升",
        "D": "训练损失趋于平稳，验证损失趋于平稳"
      },
      "answer": "C",
      "explanation": "训练损失下降但验证损失先降后升，说明模型在背题——训练集上变好但验证集上变差，是过拟合的典型特征。"
    },
    {
      "id": "Q047",
      "module": "大模型微调",
      "type": "single",
      "question": "ms-swift 框架中，LoRA 微调的默认 learning_rate 是多少？",
      "options": {
        "A": "1e-3",
        "B": "5e-5",
        "C": "1e-6",
        "D": "0.1"
      },
      "answer": "B",
      "explanation": "ms-swift 框架 LoRA 微调默认 learning_rate 为 5e-5。LoRA 微调学习率通常在 1e-5 ~ 5e-4 之间。"
    },
    {
      "id": "Q048",
      "module": "大模型微调",
      "type": "multiple",
      "question": "关于三条蒸馏路径，以下说法正确的有哪些？",
      "options": {
        "A": "数据合成蒸馏（黑盒蒸馏）只需要教师模型的 API",
        "B": "知识蒸馏 KD（白盒蒸馏）需要教师的模型权重",
        "C": "白盒蒸馏学生学习教师的概率分布（软标签），包含暗知识",
        "D": "三条蒸馏路径的训练流程完全不同"
      },
      "answer": [
        "A",
        "B",
        "C"
      ],
      "explanation": "黑盒蒸馏只需教师 API；白盒蒸馏需要教师权重，学习概率分布（软标签）含暗知识；推理压缩学习 CoT 轨迹。三条路径训练流程几乎相同（都是 SFT）。"
    },
    {
      "id": "Q049",
      "module": "大模型微调",
      "type": "multiple",
      "question": "以下哪些是 LoRA 微调中 lora_rank 参数的调优建议？",
      "options": {
        "A": "数据量小于 200 条时降到 4",
        "B": "数据量大于 2000 条或复杂任务时升到 16",
        "C": "默认值为 8",
        "D": "lora_rank 越大越好"
      },
      "answer": [
        "A",
        "B",
        "C"
      ],
      "explanation": "lora_rank 默认 8。数据量小时降到 4 避免过拟合，数据量大或复杂任务升到 16。lora_rank 不是越大越好，过大会增加过拟合风险。"
    },
    {
      "id": "Q050",
      "module": "大模型微调",
      "type": "true_false",
      "question": "LoRA 微调可以避免灾难性遗忘问题，因为它不修改原始权重。",
      "answer": true,
      "explanation": "LoRA 不修改原始权重，只训练约 0.4% 的参数，保留了模型 97% 以上的基础能力，有效避免全参数微调可能导致的灾难性遗忘。"
    },
    {
      "id": "Q051",
      "module": "大模型微调",
      "type": "true_false",
      "question": "微调至少需要 1000+ 条优质训练数据才能获得较好效果。",
      "answer": true,
      "explanation": "微调至少需要 1000+ 条优质训练数据。数据量太少容易导致过拟合，数据质量同样重要，需经过严格的质量过滤。"
    },
    {
      "id": "Q052",
      "module": "大模型微调",
      "type": "true_false",
      "question": "早停法（Early Stopping）是通过监控训练损失，当其上升时停止训练。",
      "answer": false,
      "explanation": "早停法是监控验证损失（eval loss），而非训练损失。当验证损失开始上升时停止训练，因为这说明模型开始过拟合。"
    },
    {
      "id": "Q053",
      "module": "大模型微调",
      "type": "single",
      "question": "ms-swift 框架中合并 LoRA 参数的命令是？",
      "options": {
        "A": "swift merge --lora true",
        "B": "swift export --merge_lora true",
        "C": "swift combine --lora true",
        "D": "swift save --merge_lora true"
      },
      "answer": "B",
      "explanation": "使用 swift export --merge_lora true 命令合并 LoRA 参数。合并后的模型可以像普通模型一样直接部署。"
    },
    {
      "id": "Q054",
      "module": "大模型微调",
      "type": "single",
      "question": "蒸馏数据合成流程中，教师模型标注时建议的 temperature 值是？",
      "options": {
        "A": "0.0",
        "B": "0.1",
        "C": "0.7",
        "D": "1.0"
      },
      "answer": "B",
      "explanation": "教师模型标注时使用 temperature=0.1 降低随机性，确保标注数据的质量和一致性。"
    },
    {
      "id": "Q055",
      "module": "大模型微调",
      "type": "multiple",
      "question": "蒸馏数据合成流程中的质量过滤包括哪些检查？",
      "options": {
        "A": "JSON 解析检查",
        "B": "必填字段检查",
        "C": "取值范围检查",
        "D": "语法检查"
      },
      "answer": [
        "A",
        "B",
        "C"
      ],
      "explanation": "质量过滤包括三类检查：JSON 解析检查、必填字段检查、取值范围检查。通过质量过滤确保训练数据的有效性。"
    },
    {
      "id": "Q056",
      "module": "大模型微调",
      "type": "true_false",
      "question": "白盒蒸馏中的暗知识指的是教师模型输出概率分布中包含的丰富信息。",
      "answer": true,
      "explanation": "白盒蒸馏学习教师的概率分布（软标签），软标签中包含的暗知识——如 HR 70%、行政 25%、IT 5% 的分布信息——比硬标签包含更丰富信息。"
    },
    {
      "id": "Q057",
      "module": "多Agent及多模态应用",
      "type": "single",
      "question": "Function Calling 的工作原理中，模型返回的工具调用决策字段是？",
      "options": {
        "A": "function_calls",
        "B": "tool_calls",
        "C": "api_calls",
        "D": "action_calls"
      },
      "answer": "B",
      "explanation": "Function Calling 中模型返回 tool_calls 字段，包含函数名和参数 JSON。开发者解析后执行函数，将结果包装为 role: tool 的 message 再次调用 API。"
    },
    {
      "id": "Q058",
      "module": "多Agent及多模态应用",
      "type": "single",
      "question": "ReAct 模式的三个核心步骤是？",
      "options": {
        "A": "读取-执行-检查",
        "B": "思考-行动-观察",
        "C": "计划-执行-回顾",
        "D": "输入-处理-输出"
      },
      "answer": "B",
      "explanation": "ReAct（Reasoning + Acting）三个核心步骤：思考（Thought）—推理当前状态；行动（Action）—调用工具；观察（Observation）—获取工具返回结果。循环直到任务完成。"
    },
    {
      "id": "Q059",
      "module": "多Agent及多模态应用",
      "type": "single",
      "question": "MCP 协议的核心思想是？",
      "options": {
        "A": "所有工具由开发者统一定义",
        "B": "谁提供工具谁定义工具，将工具定义与使用解耦",
        "C": "使用关键词匹配来发现工具",
        "D": "所有工具必须通过中央注册表管理"
      },
      "answer": "B",
      "explanation": "MCP 核心思想是谁提供工具谁定义工具，将工具定义与使用解耦。MCP Server 声明工具，MCP Client 动态发现并拉取工具定义。"
    },
    {
      "id": "Q060",
      "module": "多Agent及多模态应用",
      "type": "single",
      "question": "MCP 协议的两种传输方式是？",
      "options": {
        "A": "TCP 和 UDP",
        "B": "HTTP 和 WebSocket",
        "C": "stdio 和 Streamable HTTP",
        "D": "gRPC 和 REST"
      },
      "answer": "C",
      "explanation": "MCP 支持两种传输方式：stdio（本地通信，适合开发调试）和 Streamable HTTP（远程通信，适合生产环境多用户共用）。"
    },
    {
      "id": "Q061",
      "module": "多Agent及多模态应用",
      "type": "single",
      "question": "以下哪种多 Agent 协作模式采用中心化星型结构？",
      "options": {
        "A": "共创协作模式",
        "B": "黑板模式",
        "C": "分层规划模式",
        "D": "并行执行模式"
      },
      "answer": "C",
      "explanation": "分层规划模式采用中心化星型结构。Leader Agent 分解子任务、分派给 Member Agents、汇总结果。AgentScope 中通过 handoff 机制实现。"
    },
    {
      "id": "Q062",
      "module": "多Agent及多模态应用",
      "type": "multiple",
      "question": "以下哪些是工作流编排的模式？",
      "options": {
        "A": "流水线（Pipeline）",
        "B": "混合专家（MoA）",
        "C": "人机协作（HITL）",
        "D": "向量化召回"
      },
      "answer": [
        "A",
        "B",
        "C"
      ],
      "explanation": "工作流五种编排模式：流水线、分支选择、并行执行、混合专家（MoA）、人机协作（HITL）。向量化召回是记忆管理策略。"
    },
    {
      "id": "Q063",
      "module": "多Agent及多模态应用",
      "type": "multiple",
      "question": "关于 MoA（混合专家）模式，以下说法正确的有哪些？",
      "options": {
        "A": "多个不同的大语言模型并行处理同一任务",
        "B": "包含提议者和聚合器两类角色",
        "C": "核心原理是模型的协作性",
        "D": "计算成本与单模型相同"
      },
      "answer": [
        "A",
        "B",
        "C"
      ],
      "explanation": "MoA 让多个不同模型并行处理同一任务，包含提议者和聚合器。核心原理是协作性。但计算成本是 N 倍，用资源换质量。"
    },
    {
      "id": "Q064",
      "module": "多Agent及多模态应用",
      "type": "true_false",
      "question": "大模型是无状态的（Stateless），每次 API 调用都是独立的，调用结束后彻底忘记一切。",
      "answer": true,
      "explanation": "大模型是无状态的，每次 API 调用独立。Agent 的记忆能力通过外部机制实现：短期记忆通过对话缓冲区，长期记忆通过向量数据库。"
    },
    {
      "id": "Q065",
      "module": "多Agent及多模态应用",
      "type": "true_false",
      "question": "固定窗口截断策略的优点是保留核心信息，缺点是额外 API 调用成本高。",
      "answer": false,
      "explanation": "固定窗口截断优点是实现简单、计算开销小；缺点是一刀切失忆。滚动摘要策略才是保留核心信息但额外 API 调用成本高的描述。"
    },
    {
      "id": "Q066",
      "module": "多Agent及多模态应用",
      "type": "true_false",
      "question": "AgentScope 的 agent_control 模式让 Agent 获得 record_to_memory 和 retrieve_from_memory 工具，自主决定何时记忆和回忆。",
      "answer": true,
      "explanation": "agent_control 模式让 Agent 获得两个工具自主决定何时记录和检索记忆，实现主动记忆管理。"
    },
    {
      "id": "Q067",
      "module": "多Agent及多模态应用",
      "type": "single",
      "question": "多 Agent 系统的 Token 消耗通常是单 Agent 的多少倍？",
      "options": {
        "A": "1-2 倍",
        "B": "3-5 倍",
        "C": "10 倍以上",
        "D": "没有增加"
      },
      "answer": "B",
      "explanation": "多 Agent 系统增加 3-5 倍 Token 消耗，但通过提高产出可用性避免重复尝试的隐性成本，是对高质量结果的有效投资。"
    },
    {
      "id": "Q068",
      "module": "多Agent及多模态应用",
      "type": "single",
      "question": "AgentScope 中实现共创协作模式的组件是？",
      "options": {
        "A": "sequential_pipeline",
        "B": "MsgHub",
        "C": "PlanNotebook",
        "D": "Toolkit"
      },
      "answer": "B",
      "explanation": "AgentScope 使用 MsgHub 实现共创协作模式（黑板模式），任何 Agent 的回复自动被其他参与者听到并作为上下文。"
    },
    {
      "id": "Q069",
      "module": "多Agent及多模态应用",
      "type": "multiple",
      "question": "以下哪些是 AI 在医疗行业的实际应用案例？",
      "options": {
        "A": "阿里云与阿斯利康合作生成药品不良反应报告",
        "B": "达摩院达医智影 CT 影像辅助诊断（20 秒，96%+准确率）",
        "C": "虚拟偶像出演真人剧集",
        "D": "精准学基于千问大模型的 AI 一对一老师"
      },
      "answer": [
        "A",
        "B"
      ],
      "explanation": "医疗行业案例：药品不良反应报告生成、CT 影像辅助诊断。虚拟偶像属于娱乐行业，AI 一对一老师属于教育行业。"
    },
    {
      "id": "Q070",
      "module": "多Agent及多模态应用",
      "type": "true_false",
      "question": "QwQ 是基于 Qwen2.5 系列训练的强推理能力 AI 模型，支持 131,072 tokens 超长上下文。",
      "answer": true,
      "explanation": "QwQ 基于 Qwen2.5 训练，通过强化学习提升推理性能。分商业版（qwq-plus）和开源版（qwq-32b），支持 131K tokens 上下文，但不支持工具调用和结构化输出。"
    },
    {
      "id": "Q071",
      "module": "生产环境应用实践",
      "type": "single",
      "question": "vLLM 是什么？",
      "options": {
        "A": "一种大模型微调框架",
        "B": "专为大模型推理设计的开源框架，通过内存优化和缓存策略提升推理速度",
        "C": "一种向量数据库",
        "D": "一种提示词优化工具"
      },
      "answer": "B",
      "explanation": "vLLM 是专为大模型推理设计的开源框架，通过内存优化和缓存策略提升推理速度和支持高并发。兼容 OpenAI API。"
    },
    {
      "id": "Q072",
      "module": "生产环境应用实践",
      "type": "single",
      "question": "以下哪个云服务适合轻量级推理和低频访问场景？",
      "options": {
        "A": "百炼",
        "B": "函数计算 FC",
        "C": "PAI-EAS",
        "D": "GPU 云服务器 ECS"
      },
      "answer": "B",
      "explanation": "函数计算 FC 提供 Serverless GPU，按请求量计费，自动扩缩容，免运维，适合轻量级推理和低频访问。但有冷启动延迟。"
    },
    {
      "id": "Q073",
      "module": "生产环境应用实践",
      "type": "single",
      "question": "TTFT 的含义是什么？",
      "options": {
        "A": "Time to Final Text",
        "B": "Time to First Token（首 token 延迟）",
        "C": "Total Token Flow Time",
        "D": "Text Transfer Throughput Time"
      },
      "answer": "B",
      "explanation": "TTFT（Time to First Token）是首 token 延迟，是 SLO 的关键指标之一。另一个关键指标是 TPOT（每 token 生成时间）。"
    },
    {
      "id": "Q074",
      "module": "生产环境应用实践",
      "type": "single",
      "question": "以下哪种计费方式可以最高节约 90% 成本？",
      "options": {
        "A": "预付费（包年包月）",
        "B": "按量付费",
        "C": "抢占式实例（Spot）",
        "D": "预留实例"
      },
      "answer": "C",
      "explanation": "抢占式实例按市场价实时变化计费，最高可节约 90% 成本，适用于极致成本控制和非关键业务。但可能被回收。"
    },
    {
      "id": "Q075",
      "module": "生产环境应用实践",
      "type": "single",
      "question": "提示词注入（Prompt Injection）攻击是指什么？",
      "options": {
        "A": "向训练数据中植入后门触发词",
        "B": "通过角色扮演等方式诱导模型绕过安全限制",
        "C": "通过海量 API 调用复制模型能力",
        "D": "用无关信息干扰模型逻辑判断"
      },
      "answer": "B",
      "explanation": "提示词注入通过角色扮演、指令覆盖、越狱等方式诱导模型绕过安全限制，注入新指令覆盖或劫持模型原有任务。"
    },
    {
      "id": "Q076",
      "module": "生产环境应用实践",
      "type": "single",
      "question": "阿里云 AI 安全护栏在百炼中的集成方式是通过什么请求头？",
      "options": {
        "A": "X-API-Key",
        "B": "X-DashScope-DataInspection",
        "C": "Content-Security-Policy",
        "D": "Authorization"
      },
      "answer": "B",
      "explanation": "AI 安全护栏在百炼中通过请求头 X-DashScope-DataInspection 集成。输入不合规时返回 error.code: data_inspection_failed。"
    },
    {
      "id": "Q077",
      "module": "生产环境应用实践",
      "type": "multiple",
      "question": "以下哪些是基础设施安全的基本防护措施？",
      "options": {
        "A": "网络隔离（VPC + 云防火墙）",
        "B": "静态数据加密（KMS 加密 OSS 和数据库）",
        "C": "最小权限原则（RAM 访问控制）",
        "D": "模型量化压缩"
      },
      "answer": [
        "A",
        "B",
        "C"
      ],
      "explanation": "基础设施安全四项基本防护：网络隔离、系统加固、静态数据加密、最小权限原则。模型量化压缩是性能优化手段。"
    },
    {
      "id": "Q078",
      "module": "生产环境应用实践",
      "type": "multiple",
      "question": "关于零信任安全理念，以下说法正确的有哪些？",
      "options": {
        "A": "永不信任，始终验证",
        "B": "不区分内外网，每次操作都需要验证",
        "C": "零信任只适用于外部访问",
        "D": "零信任是下一代安全理念之一"
      },
      "answer": [
        "A",
        "B",
        "D"
      ],
      "explanation": "零信任核心理念是永不信任始终验证，不区分内外网。零信任是下一代安全理念之一。零信任不限于外部访问，内部访问同样需要验证。"
    },
    {
      "id": "Q079",
      "module": "生产环境应用实践",
      "type": "true_false",
      "question": "TEE（可信执行环境）是 CPU 硬件创建的加密隔离区，用于保护使用中数据的安全。",
      "answer": true,
      "explanation": "TEE 是 CPU 硬件创建的可信执行环境，形成加密隔离区，保护使用中（in-use）的数据安全。"
    },
    {
      "id": "Q080",
      "module": "生产环境应用实践",
      "type": "true_false",
      "question": "max_tokens 参数是控制输出内容长度的主要手段，应优先使用它来控制回复的详细程度。",
      "answer": false,
      "explanation": "max_tokens 本质是安全阀而非内容控制手段。需要简短回复时应优先使用提示词引导，max_tokens 用于防止异常长输出的兜底。"
    },
    {
      "id": "Q081",
      "module": "生产环境应用实践",
      "type": "true_false",
      "question": "上下文缓存（Context Cache）缓存命中部分按标准单价的 40% 计费。",
      "answer": true,
      "explanation": "百炼的上下文缓存缓存公共前缀内容，缓存命中部分（cache_token）的单价为 input_token 的 40%。"
    },
    {
      "id": "Q082",
      "module": "生产环境应用实践",
      "type": "true_false",
      "question": "《生成式人工智能服务管理暂行办法》规定，未完成算法备案的生成式 AI 服务面临下架风险。",
      "answer": true,
      "explanation": "《生成式人工智能服务管理暂行办法》自 2023 年 8 月 15 日起施行，要求提供生成式 AI 服务的企业完成算法备案，未完成备案面临下架风险。"
    },
    {
      "id": "Q083",
      "module": "生产环境应用实践",
      "type": "single",
      "question": "RAG 安全防护的第一道防线是什么？",
      "options": {
        "A": "知识库双重加密",
        "B": "知识库访问控制",
        "C": "输出内容审查",
        "D": "输入提示词过滤"
      },
      "answer": "B",
      "explanation": "RAG 安全防护第一道防线是知识库访问控制——根据用户权限过滤 Top-K 文档。第二道防线是知识库双重加密。"
    },
    {
      "id": "Q084",
      "module": "生产环境应用实践",
      "type": "single",
      "question": "DCPE 加密算法的特点是什么？",
      "options": {
        "A": "完全不可逆的哈希算法",
        "B": "保留向量近似距离关系，支持向量检索，同时破坏精确数值结构",
        "C": "仅支持文本加密不支持向量",
        "D": "与 AES-256 完全相同的对称加密"
      },
      "answer": "B",
      "explanation": "DCPE 通过加噪、缩放、归一化、洗牌等操作，保留向量近似距离关系（支持向量检索），同时破坏精确数值结构（防止逆向还原）。"
    },
    {
      "id": "Q085",
      "module": "生产环境应用实践",
      "type": "multiple",
      "question": "应用实时三层防御包括哪些？",
      "options": {
        "A": "输入过滤：拦截越狱、角色扮演、提示词注入",
        "B": "运行监控：审计 Agent 行为，拦截恶意功能调用",
        "C": "输出审查：拦截幻觉、有害言论、数据泄露",
        "D": "模型训练：在训练阶段消除所有安全风险"
      },
      "answer": [
        "A",
        "B",
        "C"
      ],
      "explanation": "三层防御：输入过滤、运行监控、输出审查。模型训练阶段无法消除所有安全风险，需要运行时防护。"
    },
    {
      "id": "Q086",
      "module": "生产环境应用实践",
      "type": "multiple",
      "question": "OpenTelemetry 的三类数据是什么？",
      "options": {
        "A": "Metrics（指标）：Token 消耗、延迟等",
        "B": "Traces（链路追踪）：请求经过的每个环节及耗时",
        "C": "Logs（日志）：输入输出、错误堆栈、审计信息",
        "D": "Alerts（告警）：阈值触发通知"
      },
      "answer": [
        "A",
        "B",
        "C"
      ],
      "explanation": "OpenTelemetry 三类数据：Metrics、Traces、Logs。Alerts 是基于这三类数据设置的规则，不属于数据类型。"
    },
    {
      "id": "Q087",
      "module": "生产环境应用实践",
      "type": "true_false",
      "question": "灰度发布是先让小比例用户（如 5%）试用新模型，达标后再全面替换。",
      "answer": true,
      "explanation": "灰度发布是渐进式发布策略，先让小比例用户试用新模型，监控指标和反馈，达标后再逐步扩大范围直至全面替换。"
    },
    {
      "id": "Q088",
      "module": "生产环境应用实践",
      "type": "true_false",
      "question": "蓝绿部署是指将模型部署在蓝色和绿色两个不同的 GPU 上。",
      "answer": false,
      "explanation": "蓝绿部署是零停机部署策略，维护两套完全相同的环境，一套对外提供服务，另一套部署新版本，通过切换流量实现零停机更新。不是指部署在两个 GPU 上。"
    },
    {
      "id": "Q089",
      "module": "大模型应用开发",
      "type": "single",
      "question": "以下关于 PAI-DSW 的说法，正确的是？",
      "options": {
        "A": "PAI-DSW 免费试用是无限免费的",
        "B": "关闭浏览器即自动停止实例计费",
        "C": "免费试用按计算时抵扣，3 个月内每月 250 计算时，总计 750 计算时",
        "D": "PAI-DSW 只支持 GPU 实例"
      },
      "answer": "C",
      "explanation": "PAI-DSW 免费试用按计算时抵扣，3 个月内每月 250 计算时，总计 750 计算时。关闭浏览器不等于停止实例，必须手动停止或删除。同时支持 CPU 和 GPU。"
    },
    {
      "id": "Q090",
      "module": "大模型检索增强",
      "type": "single",
      "question": "LlamaIndex 中用于创建索引的核心 API 是？",
      "options": {
        "A": "SimpleDirectoryReader.from_documents()",
        "B": "VectorStoreIndex.from_documents()",
        "C": "DashScopeEmbedding.create_index()",
        "D": "OpenAI.create_vector_index()"
      },
      "answer": "B",
      "explanation": "使用 VectorStoreIndex.from_documents(documents, embed_model=...) 创建向量索引，包含文档切片和建索引两个步骤。"
    },
    {
      "id": "Q091",
      "module": "多Agent及多模态应用",
      "type": "single",
      "question": "以下哪种记忆策略可以摆脱上下文窗口束缚，精准回忆最相关内容？",
      "options": {
        "A": "固定窗口截断",
        "B": "滚动摘要",
        "C": "向量化召回",
        "D": "全量对话历史"
      },
      "answer": "C",
      "explanation": "向量化召回将对话转为向量存入向量数据库，通过语义相似度搜索找出最相关历史记录，可摆脱上下文窗口束缚。缺点是系统复杂度最高。"
    },
    {
      "id": "Q092",
      "module": "生产环境应用实践",
      "type": "single",
      "question": "vLLM 启动模型服务的命令中，控制显存占用率的参数是？",
      "options": {
        "A": "--memory-usage",
        "B": "--gpu-memory-utilization",
        "C": "--vram-limit",
        "D": "--memory-cap"
      },
      "answer": "B",
      "explanation": "使用 --gpu-memory-utilization 参数控制显存占用率，如 --gpu-memory-utilization 0.7 表示最多使用 70% 的 GPU 显存。"
    },
    {
      "id": "Q093",
      "module": "大模型微调",
      "type": "single",
      "question": "以下哪种任务特征适合使用蒸馏？",
      "options": {
        "A": "需要实时知识更新的任务",
        "B": "需要多步推理的任务",
        "C": "输出格式固定、不依赖外部知识、高频调用、成本敏感的任务",
        "D": "教师模型本身不稳定的任务"
      },
      "answer": "C",
      "explanation": "蒸馏适合输出格式固定、不依赖外部知识、高频调用、成本敏感的场景。不适合需要实时知识更新（用 RAG）、需要多步推理、教师不稳定的场景。"
    },
    {
      "id": "Q094",
      "module": "大模型提示词工程",
      "type": "single",
      "question": "在业务环境中快速验证新 AI 工具的有效策略是什么？",
      "options": {
        "A": "直接在全公司范围推广",
        "B": "选择一小群有代表性的用户进行试点",
        "C": "等待技术完全成熟后再使用",
        "D": "仅由技术团队内部使用"
      },
      "answer": "B",
      "explanation": "小规模试点可有效控制风险，避免因技术不成熟或业务场景不合适导致项目失败。这是 RIDE 方法论中验效果阶段的实践。"
    },
    {
      "id": "Q095",
      "module": "大模型检索增强",
      "type": "single",
      "question": "RAG 评测运营体系中，业务指标、核心技术指标和算法指标的正确优先级排序是？",
      "options": {
        "A": "算法指标 > 核心技术指标 > 业务指标",
        "B": "业务指标 > 核心技术指标 > 算法指标",
        "C": "核心技术指标 > 业务指标 > 算法指标",
        "D": "三者优先级相同"
      },
      "answer": "B",
      "explanation": "指标优先级：业务指标（如用户满意度）> 核心技术指标（如召回率）> 算法指标（如 Ragas 分数）。业务指标最终决定应用是否成功。"
    },
    {
      "id": "Q096",
      "module": "多Agent及多模态应用",
      "type": "true_false",
      "question": "反思（Reflection）机制中，外部反馈的核心思路是将生成结果放到真实环境执行，用执行结果反馈给模型。",
      "answer": true,
      "explanation": "外部反馈将生成结果放到真实环境执行，用执行结果反馈给模型。包括代码执行验证、图表渲染验证、计算验证、结构化校验等。"
    },
    {
      "id": "Q097",
      "module": "生产环境应用实践",
      "type": "single",
      "question": "模型可信的三要素是什么？",
      "options": {
        "A": "速度、准确率、安全性",
        "B": "公平性、鲁棒性、可解释性",
        "C": "性能、成本、稳定性",
        "D": "可用性、可靠性、可维护性"
      },
      "answer": "B",
      "explanation": "模型可信三要素：公平性（消除偏见）、鲁棒性（对抗攻击时稳定）、可解释性（给出决策报告）。"
    },
    {
      "id": "Q098",
      "module": "大模型检索增强",
      "type": "true_false",
      "question": "DashScopeParse 是阿里云文档智能服务，可以将 PDF/Word 等格式解析为 Markdown。",
      "answer": true,
      "explanation": "DashScopeParse 是阿里云文档智能服务，可将 PDF/Word 等格式解析为 Markdown。解析后还可用大模型润色结果。"
    },
    {
      "id": "Q099",
      "module": "大模型应用开发",
      "type": "multiple",
      "question": "关于上下文工程，以下说法正确的有哪些？",
      "options": {
        "A": "核心理念是在正确时间将最相关、最精准的知识动态加载到有限的上下文窗口",
        "B": "RAG 是上下文工程的四大核心技术之一",
        "C": "上下文窗口的容量是无限的",
        "D": "Tool（工具使用）是上下文工程的四大核心技术之一"
      },
      "answer": [
        "A",
        "B",
        "D"
      ],
      "explanation": "上下文工程核心理念是动态加载最相关知识到有限上下文窗口。四大核心技术：RAG、Prompt、Tool、Memory。上下文窗口容量有限。"
    },
    {
      "id": "Q100",
      "module": "生产环境应用实践",
      "type": "multiple",
      "question": "以下哪些是大模型应用生产环境中的性能优化手段？",
      "options": {
        "A": "模型小型化和模型压缩（剪枝/量化/蒸馏）",
        "B": "上下文缓存（Context Cache）",
        "C": "批处理合并请求",
        "D": "增加 temperature 参数值"
      },
      "answer": [
        "A",
        "B",
        "C"
      ],
      "explanation": "性能优化包括：模型小型化/压缩、上下文缓存、批处理、Token 优化、并行化。增加 temperature 值是控制输出随机性的参数，不是性能优化手段。"
    },
    {
      "id": "CQ001",
      "module": "大模型应用开发",
      "type": "single",
      "source": "课程2.1原题",
      "question": "你开发的答疑机器人上线后，用户反馈\"每次问同一个问题，得到的回答都不一样，有时候内容还互相矛盾\"。排查发现当前使用的是默认参数配置，你应该优先调整什么来降低输出的随机性？",
      "options": {
        "A": "将 temperature 调低至接近 0，使模型倾向于选择概率最高的 Token",
        "B": "将 top_p 调高至接近 1，扩大候选 Token 的采样范围",
        "C": "在 system prompt 中追加\"请保持回答一致\"的指令约束",
        "D": "切换为参数量更大的模型，因为大模型的输出稳定性更高"
      },
      "answer": "A",
      "explanation": "temperature 控制 softmax 输出概率分布的尖锐程度。调低 temperature 会让概率集中在少数高概率 Token 上，使输出更加确定和稳定。top_p 调高会扩大采样范围增加随机性；提示词约束无法改变采样机制；模型参数量与输出随机性无直接关系。"
    },
    {
      "id": "CQ002",
      "module": "大模型应用开发",
      "type": "single",
      "source": "课程2.1原题",
      "question": "你在测试答疑机器人的多轮对话功能。用户先问\"我们公司用什么项目管理工具\"，机器人回答了 Jira。用户接着问\"怎么申请账号\"，但机器人回答的是通用的账号申请流程，完全没有提到 Jira。最可能的原因是什么？",
      "options": {
        "A": "第二次调用时没有把之前的对话历史放入 messages 数组，模型无法理解\"账号\"指的是 Jira 账号",
        "B": "流式输出模式下模型只能处理当前轮次的输入，无法读取之前的 system prompt 内容",
        "C": "模型的上下文窗口已满，自动丢弃了第一轮对话中包含 Jira 信息的 assistant 消息",
        "D": "大模型的 temperature 设置过高，导致模型在第二轮对话中\"遗忘\"了之前提到的工具名称"
      },
      "answer": "A",
      "explanation": "大模型 API 是无状态的，每次调用都是独立的。如果第二次调用时只传入了\"怎么申请账号\"，模型无从知道用户指的是哪个工具的账号。流式输出只改变展示方式不影响 messages 处理；两轮简短对话不会填满上下文窗口；temperature 控制随机性不会导致遗忘上下文信息。"
    },
    {
      "id": "CQ003",
      "module": "大模型应用开发",
      "type": "single",
      "source": "课程2.1原题",
      "question": "你需要用大模型从用户反馈中提取结构化信息（如产品名称、问题类型、严重程度），要求每次提取结果稳定一致。下列参数配置最合理的是哪个？",
      "options": {
        "A": "temperature=1.5, top_p=0.9 —— 高创造力配置，让模型灵活理解用户表述",
        "B": "temperature=0.1, top_p=0.3 —— 低随机性配置，让模型尽量选择概率最高的 Token",
        "C": "temperature=0.7, top_p=0.8 —— 默认均衡配置，适用于大多数通用对话场景",
        "D": "temperature=0.1, top_p=0.95 —— 同时调低温度并放宽采样范围以兼顾稳定和多样"
      },
      "answer": "B",
      "explanation": "结构化信息提取属于明确答案类任务，需要输出高度稳定。temperature 和 top_p 都应调低，使模型集中选择高概率 Token。选项A的高temperature会引入大量随机性；选项C的默认配置随机性仍偏高；选项D同时调整两个参数且方向相反，可能导致输出行为不可预测，且课程建议不要同时调整这两个参数。"
    },
    {
      "id": "CQ004",
      "module": "大模型检索增强",
      "type": "single",
      "source": "课程2.2原题",
      "question": "在RAG应用中进行多轮对话，应该如何进行检索？",
      "options": {
        "A": "使用完整的对话历史作为检索查询",
        "B": "结合历史对话信息对输入问题改写后进入检索阶段",
        "C": "仅使用最新问题进行检索，忽略对话历史",
        "D": "将上一轮召回的文本段迁移过来"
      },
      "answer": "B",
      "explanation": "通过动态重写当前问题，既保留了对话连贯性，又避免了过时文本迁移问题，是平衡效率与精度的最优方案。直接使用原始问题或完整历史记录会导致检索噪声或信息冗余。"
    },
    {
      "id": "CQ005",
      "module": "大模型检索增强",
      "type": "single",
      "source": "课程2.2原题",
      "question": "你的 RAG 答疑机器人上线后，用户问\"年假还剩几天\"时能正确召回《考勤管理制度》中的相关内容。但用户问\"我想休息一下，还有多少带薪假\"时，系统什么都没召回。最可能的原因是什么？",
      "options": {
        "A": "\"带薪假\"在知识库文档中没有出现过，需要在文档中补充这个同义词表述",
        "B": "当前使用的是关键词匹配检索，无法理解\"带薪假\"和\"年假\"的语义关联",
        "C": "Embedding 模型的向量维度太低，无法区分\"休息\"和\"年假\"这两个不同概念",
        "D": "用户问题过长导致分词结果异常，需要在检索前对用户输入做长度截断处理"
      },
      "answer": "B",
      "explanation": "关键词匹配只能找到包含完全相同词汇的内容，无法理解\"带薪假\"和\"年假\"是同一概念的不同表述。如果改用向量语义检索，Embedding 模型能捕获语义相似性，即使用词不同也能匹配到相关文档。"
    },
    {
      "id": "CQ006",
      "module": "大模型提示词工程",
      "type": "single",
      "source": "课程2.3原题",
      "question": "你的答疑机器人在回答\"如何提交代码\"时，给出了一份面向资深开发者的 Git 高级操作指南，包含 rebase、cherry-pick 等内容。但实际用户大多是刚入职的非技术岗新人，反馈看不懂。你应该在提示词中优先补充哪个要素？",
      "options": {
        "A": "补充角色(Role)，要求模型扮演一位耐心的技术导师来组织语言",
        "B": "补充受众(Audience)，明确目标用户是零编程基础的新入职员工",
        "C": "补充输出格式(Format)，要求模型以编号步骤的形式呈现操作流程",
        "D": "补充少样本示例(Sample)，提供一份简洁版操作指南作为参考范例"
      },
      "answer": "B",
      "explanation": "问题的核心是\"内容深度不匹配目标用户\"。受众(Audience)要素直接告诉模型\"为谁而写\"，从而调整内容的深度和用词。角色设定能影响语气风格但不如直接指定受众精准；格式调整不解决内容深度问题；示例能引导风格但本质上是给答案而非让模型理解受众需求。"
    },
    {
      "id": "CQ007",
      "module": "大模型提示词工程",
      "type": "multiple",
      "source": "课程2.3原题",
      "question": "你接手了一个复杂的、用于生成代码的提示词，但缺乏相关文档。在直接修改这个\"黑盒\"提示词之前，你会执行哪些准备工作来确保后续优化的有效性？",
      "options": {
        "A": "收集模型输出不佳的具体案例（Bad Cases）",
        "B": "立即开始草拟一个全新的、更简单的替代版本",
        "C": "清晰地用文字描述出期望的输出标准和格式",
        "D": "通读整个提示词，尝试凭直觉找出逻辑漏洞"
      },
      "answer": [
        "A",
        "C"
      ],
      "explanation": "正确的优化（如Meta Prompting）需要明确的\"问题\"和\"目标\"。选项A（坏样本）和选项C（期望输出）是定义\"问题\"和\"目标\"的关键步骤。选项B（推倒重来）和选项D（凭直觉修改）都是高风险低效率的方法。"
    },
    {
      "id": "CQ008",
      "module": "大模型提示词工程",
      "type": "multiple",
      "source": "课程2.3原题",
      "question": "在使用推理型大模型（如qwen3-plus）执行深度思考任务时，以下哪些提示词技巧是推荐的？",
      "options": {
        "A": "给出简单、明确的任务指示",
        "B": "补充足够的背景信息",
        "C": "如有特定用户群体或特定任务要求，设定角色或受众",
        "D": "必须在提示词里写\"一步一步推理\"或者\"给出解释\"，模型才会使用深度思考模式",
        "E": "当描述太抽象或无法准确描述时，可以通过增加示例来明确这些信息"
      },
      "answer": [
        "A",
        "B",
        "C",
        "E"
      ],
      "explanation": "推理型大模型（如qwen3-plus）无需显式要求即可通过类似思维链的模式做深度思考，因此选项D是错误的。选项A、B、C、E都是推荐的提示词技巧。"
    },
    {
      "id": "CQ009",
      "module": "大模型检索增强",
      "type": "single",
      "source": "课程2.4原题",
      "question": "你在评测答疑机器人时发现：对于问题\"张伟是哪个部门的\"，系统召回了5个文档切片，其中第4个包含正确答案，而排名前3的切片都是无关内容。Answer Correctness 分数尚可，但你怀疑检索排序有问题。应该重点关注哪个 Ragas 指标来验证这个判断？",
      "options": {
        "A": "Context Recall —— 检查包含正确答案的文档切片是否被召回到了结果集中",
        "B": "Context Precision —— 检查召回结果中相关切片是否排在靠前的位置",
        "C": "Answer Correctness —— 检查最终生成的答案与标准答案之间的事实一致性",
        "D": "Answer Relevancy —— 检查最终生成的答案与用户原始问题之间的相关程度"
      },
      "answer": "B",
      "explanation": "场景中的核心问题是\"正确文档存在但排名靠后\"，这正是 Context Precision 衡量的内容——检索结果中相关切片是否排在前面、信噪比是否足够高。Context Recall 关注的是\"有没有召回\"，但场景中正确切片已经被召回了。"
    },
    {
      "id": "CQ010",
      "module": "大模型检索增强",
      "type": "single",
      "source": "课程2.4原题",
      "question": "RAGAS评测中，如果Context Recall分数低但Answer Relevancy分数高，说明什么问题？",
      "options": {
        "A": "模型回答的语言质量差",
        "B": "检索到了正确文档但模型理解错误",
        "C": "虽然检索没有找到所有相关内容，但模型也可以利用找到的内容给出了相关回答",
        "D": "评测数据集设计有问题"
      },
      "answer": "C",
      "explanation": "Context Recall衡量\"相关文档有没有被全部检索到\"，分数低说明有遗漏。Answer Relevancy衡量\"回答和问题是否相关\"，分数高说明模型基于检索到的内容给出了相关回答。优化方向是改进检索策略，扩大召回范围。"
    },
    {
      "id": "CQ011",
      "module": "大模型检索增强",
      "type": "single",
      "source": "课程2.5原题",
      "question": "你的 RAG 应用处理一份包含多个部门信息的 Markdown 格式员工手册。用户问\"技术部的考勤规则是什么\"，但系统召回的切片同时包含了技术部、市场部、财务部三个部门的考勤规则，导致大模型回答时混淆了不同部门的制度。你应该优先采取哪种切片优化策略？",
      "options": {
        "A": "改用 Token 切片并设置较小的 chunk_size，按固定长度截断文档内容",
        "B": "改用 Markdown 切片，让系统按标题层级自动将不同部门拆分为独立切片",
        "C": "将整份手册按部门拆分为独立文档，为每个部门单独建立向量索引",
        "D": "增大句子窗口的 window_size，让每个切片携带更多的上下文背景信息"
      },
      "answer": "B",
      "explanation": "Markdown 格式文档天然有标题层级结构，Markdown 切片能按标题层级智能分割，将不同部门的内容拆分为独立切片，从根本上避免多部门信息混在一起。Token切片按固定长度截断可能在段落中间断开；按部门拆分文档手段过重；增大窗口会加剧信息混淆。"
    },
    {
      "id": "CQ012",
      "module": "大模型检索增强",
      "type": "single",
      "source": "课程2.5原题",
      "question": "句子窗口检索（Sentence Window Retrieval）解决了什么矛盾？",
      "options": {
        "A": "检索速度和检索精度的矛盾",
        "B": "小chunk精准定位与大chunk上下文完整的矛盾",
        "C": "向量检索和关键词检索的矛盾",
        "D": "在线推理和离线索引的矛盾"
      },
      "answer": "B",
      "explanation": "小chunk能精准匹配用户问题，但返回的内容太短、缺少上下文；大chunk上下文完整但定位不够精准。句子窗口检索的方案是：用小块做检索定位，返回时自动扩展到周围几句话，兼顾精准和完整。"
    },
    {
      "id": "CQ013",
      "module": "多Agent及多模态应用",
      "type": "single",
      "source": "课程3.1原题",
      "question": "你的Agent已经集成了日历、邮件、代码仓库三个工具，每次新增工具都要修改Agent代码、更新JSON Schema、重新部署。团队计划再接入十几个内部系统。你该如何降低工具集成的维护成本？",
      "options": {
        "A": "把所有工具的JSON Schema抽取到一个统一的配置文件中，新增工具只改配置不改代码",
        "B": "引入MCP协议，让每个工具作为独立服务运行，Agent通过标准协议动态发现和调用",
        "C": "为所有工具封装一个统一的HTTP网关，Agent只需调用网关的单一接口即可转发请求",
        "D": "减少工具数量，将功能相近的工具合并为一个多功能工具以降低管理复杂度"
      },
      "answer": "B",
      "explanation": "MCP让工具作为独立服务暴露自己的能力描述，Agent通过标准协议动态发现可用工具，新增工具无需修改Agent代码，实现了工具与Agent的解耦。A只是把配置从代码中分离，Agent仍需感知所有Schema；C的HTTP网关统一了入口但Agent失去了对工具能力的感知；D违背了扩展需求。"
    },
    {
      "id": "CQ014",
      "module": "多Agent及多模态应用",
      "type": "single",
      "source": "课程3.2原题",
      "question": "你开发了一个\"课程前期调研\"Agent，使用固定工作流并行调用三个工具：行业分析、用户画像、竞品分析。上线后竞品网站改版导致爬虫工具频繁失败，整个流程卡死。你该如何改进？",
      "options": {
        "A": "为竞品分析工具增加重试机制，失败时自动重试三次后报错退出",
        "B": "在工作流中为每个工具失败场景都预设分支处理逻辑和降级方案",
        "C": "将固定工作流改为Plan & Execute模式，让Agent根据目标自主规划并动态应对异常",
        "D": "更换为更稳定的竞品数据API服务商，从数据源层面消除工具失败的可能"
      },
      "answer": "C",
      "explanation": "Plan & Execute模式让Agent从\"执行者\"变为\"规划者\"，面对工具失败时能自主调整计划（如改用其他信息源或跳过该步骤），从架构层面获得适应性。A只是延迟失败；B方向对但为每种异常预设分支会让工作流复杂度急剧膨胀；D是理想化方案无法保证任何外部服务永远可用。"
    },
    {
      "id": "CQ015",
      "module": "多Agent及多模态应用",
      "type": "single",
      "source": "课程3.3原题",
      "question": "你的团队要用多Agent系统开发一门新课程。需求明确：先由教学设计师出大纲，再由技术专家填充代码示例，最后由编辑撰写文稿。你应该选择哪种协作模式？",
      "options": {
        "A": "共创协作模式，让三个Agent围绕共享白板自由讨论，通过多轮迭代涌现最终方案",
        "B": "分层规划模式，设置Leader Agent按顺序将子任务分派给各专家Agent并汇总结果",
        "C": "让一个全能Agent依次扮演三种角色，在同一个上下文窗口中完成所有环节的工作",
        "D": "三个Agent各自独立完成完整课程初稿，最后由人工挑选质量最好的一份作为成品"
      },
      "answer": "B",
      "explanation": "该任务具有明确的上下游依赖关系（大纲→代码→文稿），目标清晰、可拆解，适合分层规划模式。共创模式适合开放性创意问题；单体Agent处理多角色任务容易注意力涣散；D是平行冗余策略而非协作。"
    },
    {
      "id": "CQ016",
      "module": "多Agent及多模态应用",
      "type": "single",
      "source": "课程3.4原题",
      "question": "你的课程编写Agent在连续工作30轮后，忘记了第1轮用户设定的\"风格要求严谨学术化\"，开始输出轻松口语化的内容。你当前使用的是简单截断策略（保留最近N轮）。最合理的改进方案是什么？",
      "options": {
        "A": "将截断窗口从N轮扩大到2N轮，确保早期的风格要求不被丢弃",
        "B": "将风格要求硬编码到系统提示词中，使其不受记忆管理策略的影响",
        "C": "引入向量化长期记忆，将关键偏好持久化存储并在每次回复前按需检索",
        "D": "改用滚动摘要策略，定期将旧对话压缩为摘要以保留核心信息"
      },
      "answer": "C",
      "explanation": "向量化长期记忆将关键偏好持久化到向量数据库中，每次按当前任务语义检索最相关的记忆，从根本上摆脱上下文窗口的长度限制。A只是延迟问题；B仅适用于已知的固定偏好，不具备通用性；D比截断好但摘要质量取决于压缩模型，长期累积仍可能丢失细节。"
    },
    {
      "id": "CQ017",
      "module": "大模型微调",
      "type": "single",
      "source": "课程4.1原题",
      "question": "蒸馏和微调的核心区别是什么？",
      "options": {
        "A": "蒸馏不需要训练，微调需要训练",
        "B": "蒸馏的训练数据由教师模型生成，微调的训练数据由人工标注",
        "C": "蒸馏只能用于小模型，微调可以用于任何模型",
        "D": "蒸馏需要 GPU，微调不需要 GPU"
      },
      "answer": "B",
      "explanation": "蒸馏和微调的训练流程（SFT）本身几乎相同，核心区别在于训练数据的来源。蒸馏使用教师模型的输出作为训练数据，微调使用人工标注的数据。两者都需要 GPU 进行训练，都可以用于不同规模的模型。"
    },
    {
      "id": "CQ018",
      "module": "大模型微调",
      "type": "single",
      "source": "课程4.1原题",
      "question": "以下哪种任务最适合蒸馏到 0.6B 小模型？",
      "options": {
        "A": "撰写 5000 字的技术分析报告",
        "B": "多轮对话式的客户投诉处理",
        "C": "从用户输入中提取结构化的意图和实体",
        "D": "根据上下文生成创意营销文案"
      },
      "answer": "C",
      "explanation": "0.6B 模型的能力边界决定了它适合\"高频、固定域、单步判断\"的任务。结构化提取（意图识别、实体抽取、分类）正是这类任务的典型代表，输出格式固定、不需要外部知识、不需要多步推理。长文本生成、多轮对话、创意写作都超出了 0.6B 模型的能力范围。"
    },
    {
      "id": "CQ019",
      "module": "大模型微调",
      "type": "single",
      "source": "课程4.1原题",
      "question": "为什么不能随意使用商业大模型（如 GPT-4）作为蒸馏的教师模型？",
      "options": {
        "A": "GPT-4 的输出质量不够高",
        "B": "GPT-4 不支持 JSON 格式输出",
        "C": "部分商业模型的服务条款禁止用其输出训练竞品模型",
        "D": "商业模型的 API 调用速度太慢"
      },
      "answer": "C",
      "explanation": "这是一个合规问题，而非技术问题。部分商业模型在服务条款中明确禁止使用其输出来训练竞品模型。使用开源模型（如 Qwen 系列，Apache 2.0 协议）作为教师则不存在此限制。在实施蒸馏项目前，务必确认教师模型的许可条款。"
    },
    {
      "id": "CQ020",
      "module": "生产环境应用实践",
      "type": "single",
      "source": "课程4.2原题",
      "question": "选择云服务 API 还是自托管部署的关键判断因素是什么？",
      "options": {
        "A": "自托管一定比云服务便宜",
        "B": "要算账：月调用量、GPU 运维成本、盈亏平衡点",
        "C": "云服务一定比自托管快",
        "D": "只有大公司才能自托管"
      },
      "answer": "B",
      "explanation": "没有绝对的好坏之分。云服务零运维、按量付费，适合规模不确定的早期阶段；自托管成本低但需要 GPU 运维能力，适合流量稳定、规模够大的场景。选型的本质是算一笔账：月调用量多少时自托管成本低于云服务？这个盈亏平衡点因场景而异。"
    },
    {
      "id": "CQ021",
      "module": "生产环境应用实践",
      "type": "single",
      "source": "课程4.2原题",
      "question": "一个三人创业团队正在开发 AI 客服产品，目前日均调用量约 500 次，没有专职运维人员，使用的是千问系列模型。团队希望尽快上线验证商业模式。最合适的部署方式是？",
      "options": {
        "A": "租用 GPU 云服务器自行部署 vLLM，完全掌控推理环境和性能调优",
        "B": "使用百炼平台一键部署，通过 API 直接集成到产品中",
        "C": "使用容器服务 ACK 搭建 Kubernetes 集群，方便后续扩展微服务架构",
        "D": "使用函数计算 FC 部署模型，利用 Serverless 按需计费降低成本"
      },
      "answer": "B",
      "explanation": "三个关键约束决定了选型：千问系列模型（百炼原生支持）、无运维人员（排除需要运维能力的GPU服务器和ACK）、快速上线（百炼一键部署最快）。函数计算FC虽也免运维，但更适合低频离线任务且有冷启动延迟问题，对需要实时响应的客服场景不够理想。"
    },
    {
      "id": "CQ022",
      "module": "生产环境应用实践",
      "type": "single",
      "source": "课程4.4原题",
      "question": "你的 AI 应用最近遭受了大量请求，导致 GPU 资源耗尽，服务频繁中断。这种攻击属于哪一类？应该优先考虑启用哪一层防护？",
      "options": {
        "A": "提示词注入攻击，应加强 AI 大模型安全层",
        "B": "数据投毒攻击，应加强 AI 基础设施安全层",
        "C": "DDoS 攻击，应加强 AI 应用安全层",
        "D": "模型窃取攻击，应加强 AI 大模型安全层"
      },
      "answer": "C",
      "explanation": "利用高计算成本请求耗尽 GPU 资源，是针对 AI 服务的应用层 DDoS 攻击。在应用层做防御，例如使用 DDoS 高防和 WAF 进行流量清洗与访问控制。"
    },
    {
      "id": "CQ023",
      "module": "生产环境应用实践",
      "type": "single",
      "source": "课程4.4原题",
      "question": "你开发的 AI 助手具备\"阅读用户上传文档并回答问题\"的功能。安全团队在测试中发现：上传一份精心构造的 PDF 后，AI 助手会忽略用户的真实提问，转而执行 PDF 中嵌入的隐藏指令。以下哪种防御措施最能针对性地缓解这一威胁？",
      "options": {
        "A": "在用户输入端部署关键词黑名单过滤，拦截包含\"忽略指令\"等字样的请求",
        "B": "将外部文档内容标记为\"数据上下文\"而非\"指令\"，禁止模型将其升级为可执行指令",
        "C": "限制用户每分钟的上传次数，通过频率控制防止攻击者批量尝试绕过防线",
        "D": "使用更大参数的模型替换当前模型，依靠更强的理解能力自动识别恶意内容"
      },
      "answer": "B",
      "explanation": "这是典型的间接 Prompt 注入攻击——攻击指令不在用户输入中，而是隐藏在 Agent 读取的外部文档里。关键词黑名单挡不住，因为恶意指令可以用无穷种方式表达。正确的防御核心是在架构层面区分\"用户指令\"和\"外部数据内容\"，确保外部内容不会被提升为指令执行。"
    },
    {
      "id": "CQ024",
      "module": "生产环境应用实践",
      "type": "multiple",
      "source": "课程4.4原题",
      "question": "在构建一个完整的 AI 应用安全体系时，以下哪些产品或技术的组合是合理的？",
      "options": {
        "A": "仅使用 AI 安全护栏就足够了，它能解决所有问题",
        "B": "使用 RAM 进行权限控制，属于 AI 基础设施安全的一部分",
        "C": "单独使用 WAF（Web 应用防火墙）就能有效抵御针对大模型的提示词注入攻击",
        "D": "结合使用 AI 安全护栏和 DDoS 高防，分别应对模型层面的攻击和应用层面的攻击",
        "E": "对 RAG 系统的知识库和向量进行加密，是一种有效的数据安全增强手段"
      },
      "answer": [
        "B",
        "D",
        "E"
      ],
      "explanation": "单一工具无法应对所有威胁（A错误）。传统WAF主要防御SQL注入、XSS等Web攻击，对理解语义的提示词注入攻击防御能力有限（C错误）。B、D、E分别体现了基础设施、应用层和数据层面的正确防护思路。"
    },
    {
      "id": "Q101",
      "module": "大模型应用开发",
      "type": "single",
      "question": "你用同一段中文分别调用模型 A 和模型 B，发现 A 的 Input Token 数比 B 多约 50%。以下哪种分析最合理？",
      "options": {
        "A": "A 的解码器层数更少，需要将文本拆成更多 Token 来弥补推理能力",
        "B": "A 的 softmax 运算保留了更多候选 Token，拉高了 Input Token 数",
        "C": "A 的 top_p 更高，导致分词时保留了更多低概率的候选 Token",
        "D": "B 的词表里中文词汇更丰富，同样一段文字能用更少的 Token 表示"
      },
      "answer": "D",
      "explanation": "Input Token 数量取决于模型使用的分词器（Tokenizer）及其词表（Vocabulary）。分词发生在模型推理之前，与 softmax、top_p 等生成阶段参数无关（排除 B、C）。解码器层数影响的是推理深度而非分词粒度（排除 A）。如果模型 B 的词表中包含更丰富的中文词汇（如完整的中文字词而非拆成单字），同样一段中文就能用更少的 Token 表示，因此 D 是最合理的分析。",
      "source": "课程原题"
    },
    {
      "id": "Q102",
      "module": "大模型应用开发",
      "type": "single",
      "question": "你在测试 Coding Agent 时发现，即使输入的 issue 和代码上下文完全相同，Agent 每次生成的补丁在实现细节上仍会略有差异。以下哪种分析最合理？",
      "options": {
        "A": "补丁也是逐 Token 采样生成的，因此采样策略会影响其实现",
        "B": "补丁不同是因为缺少对话历史，把前几轮 messages 补全就好了",
        "C": "差异来自解码的随机性，把温度设为 0 就能保证每次结果一致",
        "D": "流式输出会打乱补丁片段的顺序，代码修复场景应将其关闭"
      },
      "answer": "A",
      "explanation": "大模型生成补丁的过程本质上与生成普通文本一样，都是逐 Token 自回归采样生成的，采样策略（temperature、top_p、top_k 等）会影响每个 Token 的选择，从而导致输出差异。选项 B 错误，因为题目明确说明输入完全相同。选项 C 虽然方向正确但过于绝对，temperature=0 只是降低随机性，由于分布式系统等因素仍不能保证完全一致。选项 D 错误，流式输出只影响展示方式，不影响生成内容的顺序和内容。",
      "source": "课程原题"
    },
    {
      "id": "Q103",
      "module": "大模型提示词工程",
      "type": "single",
      "question": "你的合同审查助手反复遗漏同一类审查要点，对话要求后依然存在问题。最有效的改进是？",
      "options": {
        "A": "将模型设定为合同法律专家角色，引导其以专业视角逐条审查",
        "B": "提供一道终止条款及完整分析过程，要求其按相同结构审查",
        "C": "要求模型审查完成后自行复核结论，找出遗漏并补充修正",
        "D": "将整份合同拆分为独立条款后分别调用模型，再汇总所有结论"
      },
      "answer": "B",
      "explanation": "反复遗漏同一类要点说明模型缺乏对该类要点的审查意识，最有效的方法是提供少样本示例（Few-shot）——给出一个完整的审查案例（包含终止条款及其完整分析过程），让模型按相同结构和深度进行审查。选项 A 的角色设定能影响语气风格，但不直接解决系统性遗漏。选项 C 的自我反馈存在自证正确偏差。选项 D 的拆分调用能提高单条款关注度，但不解决模型本身缺乏某类审查要点意识的问题。",
      "source": "课程原题"
    },
    {
      "id": "Q104",
      "module": "生产环境应用实践",
      "type": "single",
      "question": "开发公司财务问答系统时，怎样防止员工越权访问数据？",
      "options": {
        "A": "构建知识库时，对敏感数据进行哈希加密",
        "B": "微调大模型，使其拒绝回答敏感或涉密问题",
        "C": "用服务账号调用 RAG，避免泄露个人凭据",
        "D": "知识库只支持按权限查询，禁止增删改操作"
      },
      "answer": "D",
      "explanation": "课程中明确指出 RAG 安全防护的第一道防线是知识库访问控制——根据用户权限过滤 Top-K 文档，确保员工只能查询到其权限范围内的数据。选项 A 的哈希加密会破坏数据的可检索性，无法用于语义搜索。选项 B 的微调不可靠，模型仍可能被绕过。选项 C 的服务账号只是认证方式改变，不控制数据访问权限。选项 D 限制了知识库的操作权限，确保数据访问受控，是正确的安全措施。",
      "source": "课程原题"
    },
    {
      "id": "Q105",
      "module": "大模型检索增强",
      "type": "single",
      "question": "你在运维助手中输入一条含 ORA-12541 字样的排障查询，系统召回了多篇语义相近的文档，但包含该编号的目标文档排名靠后。以下哪种做法最能改善这一问题？",
      "options": {
        "A": "重建知识库，为各切片补充父文档语义摘要",
        "B": "增加关键词检索，与向量召回结果混合排序",
        "C": "提高相似度阈值，剔除不包含错误码的片段",
        "D": "先生成假想排障说明 HyDE，再做向量检索"
      },
      "answer": "B",
      "explanation": "问题核心是纯向量语义检索对精确的错误码 ORA-12541 这类关键词匹配能力不足——语义相近的文档可能排名靠前，但真正包含该错误码的目标文档反而靠后。最有效的方案是增加关键词检索（如 BM25），与向量召回结果混合排序（Hybrid Retrieval），让包含精确关键词的文档获得更高排名。选项 A 的语义摘要不解决精确匹配问题。选项 C 提高阈值可能误删目标文档。选项 D 的 HyDE 生成假想文档再做向量检索，仍依赖语义相似度，不解决关键词精确匹配问题。",
      "source": "课程原题"
    },
    {
      "id": "Q106",
      "module": "大模型检索增强",
      "type": "single",
      "source": "课程原题",
      "question": "你为售后团队搭建了 RAG 产品问答系统。功能介绍类问题回答准确，但涉及表格参数的问题频繁答错，排查发现文档以纯文本格式入库。最稳定的改进是？",
      "options": {
        "A": "将技术手册重新解析为保留表格结构的格式后重建索引",
        "B": "对用户查询做关键词扩展，增加与表格字段的匹配机会",
        "C": "在提示词中补充表格解读指引，帮助大模型理解纯文本",
        "D": "为参数表格内容添加人工标注的关键词标签后重建索引"
      },
      "answer": "A",
      "explanation": "问题根因是表格结构在纯文本入库时被破坏，导致参数行列对应关系丢失。最稳定的方案是从源头修复——用专业解析工具（如 DashScopeParse）将技术手册重新解析为保留表格结构的格式（如 Markdown 表格），再重建索引。选项 B 的关键词扩展不解决结构丢失问题；选项 C 试图用提示词弥补数据缺陷，不可靠；选项 D 的人工标注成本高且不解决结构问题。课程 2.5 中明确提到表格内容增强应通过优化文本解析实现。"
    },
    {
      "id": "Q107",
      "module": "大模型检索增强",
      "type": "single",
      "source": "课程原题",
      "question": "你接手一个 RAG 客服系统，知识库内容充足，但大量用户问题未能检索到有效文档切片。最应排查的配置项是？",
      "options": {
        "A": "向量数据库的存储与分片配置，影响索引的承载能力",
        "B": "检索端的相似度阈值，控制候选段落能否通过筛选",
        "C": "知识库文档的切片大小，影响每段向量的语义粒度",
        "D": "知识库的同步周期，影响新增文档的索引生效时间"
      },
      "answer": "B",
      "explanation": "知识库内容充足但检索不到有效切片，最应优先排查相似度阈值（similarity_cutoff）。阈值过高会导致即使语义相关的段落也被过滤掉，使大量查询返回空结果。这是最直接的检索端门控配置，且影响面最大。选项 A 的存储分片影响的是容量而非检索质量；选项 C 的切片大小虽影响语义粒度，但通常导致召回不准而非完全检索不到；选项 D 的同步周期只影响新文档，不解释大量已有内容的检索失败。"
    },
    {
      "id": "Q108",
      "module": "大模型检索增强",
      "type": "single",
      "source": "课程原题",
      "question": "你负责的产品文档助手回答频繁出错，排查后确认相关段落已被检索到，却始终未进入模型上下文。最有效的改进是？",
      "options": {
        "A": "缩小文档切片粒度，提升段落向量的语义集中程度",
        "B": "升级为更大上下文窗口的模型，容纳更多检索段落",
        "C": "向量召回后引入重排序模型，对检索内容重新打分",
        "D": "扩大召回段落数量，增加相关内容进入模型的概率"
      },
      "answer": "C",
      "explanation": "相关段落已被检索到但未进入模型上下文，说明问题出在检索后排序环节——相关段落排名靠后被截断。最有效的方案是引入重排序模型（Rerank），对向量召回的大量结果用专门模型重新打分精排，将最相关的段落排到前面。课程 2.5 中讲到的 Rerank 流程是：先大量召回（如 top_k=20），再用重排序模型精排，筛选最相关的 top_n 条。选项 A 的缩小切片粒度不解决排序问题；选项 B 的扩大上下文窗口是治标不治本；选项 D 的扩大召回数量反而可能引入更多噪声，加剧 Lost in the Middle 问题。"
    },
    {
      "id": "Q109",
      "module": "大模型检索增强",
      "type": "single",
      "source": "课程原题",
      "question": "你所在的医院技术部正在翻译一份医学影像技术手册，包含上千条专业术语与缩写（如 PET-CT、fMRI 等）。如果想在翻译时保证准确性，以下哪种做法更合适？",
      "options": {
        "A": "提供少量高频缩写示例，由模型类推剩余缩写的译法",
        "B": "为模型分配专业医学翻译员角色，靠优化提示词解决",
        "C": "统一术语标准并构建专业术语库，使用 RAG 查询释义",
        "D": "不再设置术语库，让模型在翻译时联网查询缩写的译法"
      },
      "answer": "C",
      "explanation": "上千条专业术语无法靠少样本示例（选项 A）或角色设定（选项 B）可靠覆盖，模型内化知识有限且易产生幻觉。最合适的方案是构建专业术语库并使用 RAG 技术——翻译时实时检索术语库获取权威释义，确保术语翻译的准确性和一致性。这正是 RAG 的典型应用场景：将外部权威知识动态注入模型上下文。选项 D 的联网查询不可靠，医学领域需要权威来源而非互联网搜索结果，且存在隐私和延迟问题。"
    },
    {
      "id": "Q110",
      "module": "大模型检索增强",
      "type": "single",
      "source": "课程原题",
      "question": "你需要为多份未归档的 PPT 文件创建索引，这些文件中包含表格、流程图等复杂内容。在文档解析环节，以下哪种做法最合适？",
      "options": {
        "A": "先把所有 PPT 逐页截图，再用 OCR 提取页面内容",
        "B": "调大 RAG 应用检索时的 Chunk 召回数量（Top K）",
        "C": "使用专业解析工具提取 PPT 中的复杂嵌入对象",
        "D": "将所有 PPT 合并成一个文件，再转 Markdown 入库"
      },
      "answer": "C",
      "explanation": "PPT 中包含表格、流程图等复杂嵌入对象，需要使用专业文档解析工具（如 DashScopeParse）来正确提取这些结构化内容。课程 2.5 中提到 DashScopeParse 是阿里云文档智能服务，可将 PDF/Word/PPT 等格式解析为 Markdown，保留表格等结构信息。选项 A 的截图+OCR 会丢失表格结构信息，且精度低；选项 B 的调大 Top K 是检索阶段优化，不解决文档解析阶段的问题；选项 D 的合并文件不解决复杂内容解析问题，反而增加处理难度。"
    },
    {
      "id": "Q111",
      "module": "大模型微调",
      "type": "single",
      "source": "课程原题",
      "question": "你希望用 0.6B 模型实现高效的意图分类，并已准备好一批训练样本。以下哪种做法是正确的？",
      "options": {
        "A": "先检索与问题相似的训练样本，再让 0.6B 模型参考做分类",
        "B": "用样本训练 0.6B 模型，取最后一个 checkpoint 部署上线",
        "C": "用全量样本微调 0.6B 模型，再从中采样一部分样本做验证",
        "D": "先检查标注质量再微调 0.6B 模型，满足业务指标后上线"
      },
      "answer": "D",
      "explanation": "正确的微调流程是：先检查训练数据标注质量（课程 4.1 强调质量过滤包括 JSON 解析、必填字段、取值范围检查），再进行微调训练，最后在验证集上评估满足业务指标后才能上线部署。选项 A 的 RAG 方式不适合 0.6B 小模型做分类，推理效率低且能力有限。选项 B 的取最后一个 checkpoint 部署是错误的——最后 checkpoint 可能过拟合，应监控验证损失选择最佳 checkpoint（早停法）。选项 C 的先用全量训练再采样验证是错误顺序——应先拆分训练集和验证集，训练时在验证集上评估，而非训练后再采样。"
    },
    {
      "id": "Q112",
      "module": "大模型微调",
      "type": "single",
      "source": "课程原题",
      "question": "你用微调模型观察到训练损失持续下降，验证损失先降后升。最准确的判断和处置是？",
      "options": {
        "A": "训练正常收敛，继续增加训练轮次以进一步降低损失",
        "B": "模型过拟合，应选取验证损失最低轮次的检查点部署",
        "C": "学习率过高导致震荡，应降低学习率后从头重新训练",
        "D": "数据不足导致欠拟合，应扩充训练数据集后重新训练"
      },
      "answer": "B",
      "explanation": "训练损失持续下降但验证损失先降后升，是典型的过拟合特征——模型在训练集上持续变好，但在验证集上开始变差，说明模型在背题而非学习通用规律。正确处置是采用早停法（Early Stopping），选取验证损失最低轮次的检查点部署。选项 A 继续训练会加剧过拟合；选项 C 的学习率过高表现为训练损失不降或震荡，与当前现象不符；选项 D 的欠拟合表现为训练损失和验证损失都不下降，也与当前现象不符。"
    },
    {
      "id": "Q113",
      "module": "多Agent及多模态应用",
      "type": "single",
      "source": "课程原题",
      "question": "你正在开发一个客服机器人，它既要回答产品知识问题，也要执行账户类操作，如查询订单状态、修改绑定手机号等。以下哪种做法最合适？",
      "options": {
        "A": "微调专用 SQL 生成模型，让模型直接生成 SQL 操作数据库",
        "B": "把敏感操作封装为 MCP 工具，应用层校验通过后再执行",
        "C": "用 MoA 让机器人生成多套操作方案，由聚合器择优执行",
        "D": "给机器人接入代码解释器，动态生成并运行账户操作脚本"
      },
      "answer": "B",
      "explanation": "敏感操作（如修改手机号）需要严格的安全控制。将敏感操作封装为 MCP 工具，由应用层校验用户权限和操作合法性后再执行，既实现了工具的标准化管理和动态发现（MCP 的核心优势），又确保了操作安全性。选项 A 让模型直接生成 SQL 操作数据库存在 SQL 注入和越权风险；选项 C 的 MoA 多模型并行生成操作方案引入不可控性，不适合需要确定性的敏感操作；选项 D 的代码解释器动态生成脚本极其危险，无法控制执行内容。课程 4.4 强调 Agent 工具调用需配置指令审计和最小权限。"
    },
    {
      "id": "Q114",
      "module": "生产环境应用实践",
      "type": "single",
      "source": "课程原题",
      "question": "某企业会议助手需完成录音到文字到摘要到语音播报全流程，且安全合规要求数据不得上传公有云。以下哪种技术架构最合理？",
      "options": {
        "A": "公有云 ASR 语音识别、本地文本生成模型、公有云 TTS 语音合成",
        "B": "本地部署 ASR 语音识别、本地文本生成模型、本地部署 TTS 语音合成",
        "C": "本地视觉模型分析会议录像、本地文本生成模型、本地 TTS",
        "D": "本地 ASR 转录文字、公有云大模型 API 生成摘要、本地 TTS 播报"
      },
      "answer": "B",
      "explanation": "安全合规要求数据不得上传公有云，因此全流程的三个环节（ASR 语音识别、文本摘要生成、TTS 语音合成）都必须在本地部署。选项 A 的公有云 ASR 和 TTS 违反合规要求；选项 C 用视觉模型分析会议录像是错误方向，会议录音应使用 ASR 语音识别而非视觉模型；选项 D 的公有云大模型 API 生成摘要同样违反数据不上传公有云的要求。课程 4.2 提到公共云部署、专有云部署和端云协同部署，此场景应采用专有云（本地）部署。"
    },
    {
      "id": "Q115",
      "module": "生产环境应用实践",
      "type": "single",
      "source": "课程原题",
      "question": "你为金融 APP 的智能投顾添加了关键词拦截功能，如何在保持拦截能力的同时降低误拦率？",
      "options": {
        "A": "将通用敏感词库替换为金融领域专用词表以减少误匹配",
        "B": "引入语义意图识别，根据上下文判断用户是否真实违规",
        "C": "取消输入端拦截，改为在生成回答后统一进行合规审核",
        "D": "将触发过敏感词的用户加入黑名单以阻止后续恶意咨询"
      },
      "answer": "B",
      "explanation": "关键词拦截的根本局限在于无法理解上下文语义——合法咨询中可能包含敏感词汇而被误拦。引入语义意图识别，根据上下文判断用户是否真实存在违规意图，能在保持拦截能力的同时大幅降低误拦率。选项 A 的替换专用词表能减少部分误匹配但不解决语义理解问题；选项 C 取消输入端拦截会移除第一道防线，增加安全风险，课程 4.4 强调三层防御中输入过滤是第一层；选项 D 的黑名单机制惩罚合法用户，加剧而非解决误拦问题。"
    },
    {
      "id": "Q116",
      "module": "大模型检索增强",
      "type": "multiple",
      "source": "课程原题",
      "question": "你在优化 RAG 应用时，检索条件改得非常宽松，相似度很低的文本段也可以被召回。这可能会导致出现以下哪种情况？",
      "options": {
        "A": "Context Precision 变低",
        "B": "Context Precision 变高",
        "C": "Context Recall 变低",
        "D": "Context Recall 变高"
      },
      "answer": [
        "A",
        "D"
      ],
      "explanation": "检索条件放宽后，更多文本段被召回（包括相关和不相关的）。Context Precision 衡量检索结果中相关内容的占比（信噪比），大量无关内容涌入会稀释信号占比，导致 Context Precision 变低（选 A）。Context Recall 衡量标准答案中多少比例的观点能被检索到的上下文支持，召回更多内容意味着覆盖更多标准答案观点的可能性增大，因此 Context Recall 会变高（选 D）。这是经典的精确率-召回率权衡（Precision-Recall Tradeoff）：放宽检索条件提高召回率但降低精确率。选项 B 和 C 的方向与此相反。"
    },
    {
      "id": "Q117",
      "module": "大模型检索增强",
      "type": "multiple",
      "source": "课程原题",
      "question": "某集团搭建了内部翻译系统，频繁译错专有术语或业务黑话。以下哪些改进组合最有效？",
      "options": {
        "A": "组织领域专家标注术语标准译法，建立双语术语表",
        "B": "将全部术语释义写入系统提示词，每次翻译完整注入",
        "C": "建立人工审核机制，含术语的译文经专家校对后再输出",
        "D": "建立术语知识库，翻译时自动检索匹配术语注入上下文"
      },
      "answer": [
        "A",
        "C",
        "D"
      ],
      "explanation": "选项 A 建立权威术语标准是基础工作；选项 D 用 RAG 技术在翻译时动态检索匹配术语注入上下文，是可扩展的高效方案（课程 2.2 RAG 核心应用场景）；选项 C 的人工审核提供质量兜底。选项 B 错误：将全部术语写入系统提示词不现实——上千条术语会耗尽上下文窗口，且模型无法可靠地从海量提示词中精准定位所需术语，课程 2.1 明确指出上下文窗口容量有限。正确组合是 A（建标准）+ D（自动检索注入）+ C（人工兜底）。"
    },
    {
      "id": "Q118",
      "module": "大模型微调",
      "type": "multiple",
      "source": "课程原题",
      "question": "某团队准备对一个开源基础模型进行微调，在正式启动微调前，应优先评估哪些工作？",
      "options": {
        "A": "用业务问题测试基础模型，评估当前能力与目标的差距",
        "B": "对标注数据进行质量抽检，评估数据质量和场景覆盖度",
        "C": "用全量数据启动首轮微调，通过训练损失曲线判断数据质量",
        "D": "收集更多无标注业务文档做数据增强，扩大训练数据规模"
      },
      "answer": [
        "A",
        "B"
      ],
      "explanation": "微调前应优先评估两项：选项 A 是建立基线——用业务问题测试基础模型，了解当前能力与目标差距，判断微调的必要性和重点方向（课程 4.1 的基线评测步骤）；选项 B 是数据质量检查——对标注数据进行抽检，评估质量和场景覆盖度，课程 4.1 强调质量过滤（JSON 解析、必填字段、取值范围检查）是数据合成的关键环节。选项 C 错误：不应在未评估数据质量的情况下直接启动微调，训练损失曲线只能反映训练状态，无法替代前置的质量评估。选项 D 错误：无标注文档不能直接用于 SFT 微调（需要标注数据），且数据增强不是微调前的优先评估项，应先评估已有数据再考虑扩充。"
    },
    {
      "id": "Q119",
      "module": "大模型检索增强",
      "type": "multiple",
      "source": "课程原题",
      "question": "你的企业知识助手会编造企业内部政策条款作为回答，为了减少模型幻觉，以下哪些措施最有效？",
      "options": {
        "A": "接入知识库，要求模型基于检索到的文档回答并标注出处",
        "B": "升级到参数量更大的基础模型，提升模型自身的知识储备",
        "C": "对输出做置信度评估，低置信度回答转人工审核后再推送",
        "D": "选择上下文窗口更大的模型，直接注入内部政策全文参考"
      },
      "answer": [
        "A",
        "C",
        "D"
      ],
      "explanation": "选项 A 接入知识库用 RAG 让模型基于检索到的真实文档回答并标注出处，从源头减少幻觉（课程 2.2 RAG 核心价值）；选项 C 的置信度评估+低置信度转人工是输出端安全兜底（课程 4.4 三层防御中的输出审查）；选项 D 直接注入内部政策全文让模型参考权威原文，属于上下文工程实践。选项 B 错误：更大的模型不会自动掌握企业内部政策——这些是模型训练时未见过的新知识，参数量增大不解决领域知识缺失问题，课程 2.1 明确指出大模型的训练数据有截止日期且不含企业私有知识。"
    },
    {
      "id": "Q120",
      "module": "多Agent及多模态应用",
      "type": "multiple",
      "source": "课程原题",
      "question": "一家数字营销公司计划使用多智能体协作完成广告投放流程。三个 Agent 分工明确：Creative Agent 撰写文案，Scheduler Agent 发布帖子，Analytics Agent 统计指标。下列哪些是设计这些 Agent 时的合适做法？",
      "options": {
        "A": "给每个 Agent 定义明确的职责边界",
        "B": "让每个 Agent 接收上游的完整日志",
        "C": "对发布等关键操作加入人工确认环节",
        "D": "所有 Agent 共用同一个上下文窗口"
      },
      "answer": [
        "A",
        "C"
      ],
      "explanation": "选项 A 正确：课程 3.3 强调多 Agent 系统的核心价值是专业分工，每个 Agent 应有明确职责边界和独立上下文，聚焦各自任务输出更精准。选项 C 正确：课程 3.2 的工作流编排中，人机协作（HITL）模式适用于高价值操作审批和关键产出质量审核，发布帖子等不可逆操作应加入人工确认。选项 B 错误：让每个 Agent 接收上游完整日志会引入大量无关信息，造成注意力稀释和上下文窗口浪费，应只传递必要的结构化结果。选项 D 错误：课程 3.3 明确指出每个子 Agent 应拥有独立上下文窗口，输入更聚焦、输出更精准，共用上下文会导致信息干扰和职责混淆。"
    }
  ]
};
