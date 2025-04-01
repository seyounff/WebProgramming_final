import React from "react";
import { User, Code, BookOpen, Mail, Github, Linkedin } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-blue-600 text-white p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-4xl font-bold mr-8">
              한세
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">한세윤</h1>
              <h2 className="text-xl font-semibold mb-4">
                소프트웨어학과 3학년
              </h2>
              <div className="flex space-x-4">
                <a href="#" className="flex items-center hover:underline">
                  <Mail className="w-4 h-4 mr-1" /> 이메일
                </a>
                <a href="#" className="flex items-center hover:underline">
                  <Github className="w-4 h-4 mr-1" /> GitHub
                </a>
                <a href="#" className="flex items-center hover:underline">
                  <Linkedin className="w-4 h-4 mr-1" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <h3 className="text-xl font-bold flex items-center mb-4">
              <User className="w-5 h-5 mr-2" /> 자기 소개
            </h3>
            <p className="text-gray-700">
              안녕하세요! 저는 소프트웨어학과에서 공부하고 있는 한세윤입니다.
              사용자 중심의 소프트웨어 개발에 관심이 많으며, 새로운 기술을
              배우고 적용하는 것을 좋아합니다. 문제 해결 능력과 팀워크를
              중요시하며, 끊임없이 성장하는 개발자가 되기 위해 노력하고
              있습니다.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold flex items-center mb-4">
              <Code className="w-5 h-5 mr-2" /> 기술 스택
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "JavaScript",
                "React",
                "HTML/CSS",
                "Java",
                "Python",
                "Node.js",
                "Git",
                "SQL",
                "AWS",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-blue-100 px-4 py-2 rounded-lg text-blue-800"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold flex items-center mb-4">
              <BookOpen className="w-5 h-5 mr-2" /> 학력
            </h3>
            <div className="border-l-2 border-blue-500 pl-4">
              <div className="mb-4">
                <h4 className="font-semibold">소프트웨어학과</h4>
                <p className="text-gray-600">2022 - 현재</p>
                <p className="text-gray-700">
                  주요 과목: 자료구조, 알고리즘, 웹 프로그래밍, 데이터베이스
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold flex items-center mb-4">
              <Code className="w-5 h-5 mr-2" /> 프로젝트
            </h3>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-semibold">학생 커뮤니티 웹 애플리케이션</h4>
                <p className="text-gray-600 text-sm mb-2">2023년 팀 프로젝트</p>
                <p className="text-gray-700">
                  React와 Node.js를 활용한 대학생 커뮤니티 웹 애플리케이션 개발.
                  사용자 인증, 게시판, 실시간 채팅 기능 구현.
                </p>
              </div>
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-semibold">날씨 정보 모바일 앱</h4>
                <p className="text-gray-600 text-sm mb-2">
                  2022년 개인 프로젝트
                </p>
                <p className="text-gray-700">
                  React Native를 사용한 날씨 정보 제공 모바일 애플리케이션. 위치
                  기반 서비스와 날씨 API 연동.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
